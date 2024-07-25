const PROMPTS = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  MENU: "menu",
};

export function convert_text(text) {
  switch (text.trim().toLowerCase()) {
    case PROMPTS.ONE:
      return "How was your day?";
    case PROMPTS.TWO:
      return "Why was this app created?";
    case PROMPTS.THREE:
      return "What can I do on this app?";
    case PROMPTS.FOUR:
      return "What is your purpose?";
    case PROMPTS.MENU:
      return "Show me the menu.";
    default:
      return text;
  }
}

function get_response(text) {
  switch (text.trim()) {
    case PROMPTS.ONE:
      return "My day was fine, but let's save the chit chat for real people alright?";
    case PROMPTS.TWO:
      return "This app was created to practice developing full-stack applications. The creator thought it would be funny to create a messaging service called Friendzone.";
    case PROMPTS.THREE:
      return "Friendzone is a messaging service where users can talk with their friends. Users can either create an account or sign in as a guest to access our services. Guest accounts are deleted after a session.";
    case PROMPTS.FOUR:
      return "My only purpose in life is to answer your questions.";
    case PROMPTS.MENU:
      return `Ask me any question below by texting its corresponding number:
        1. How was your day?
        2. Why was this app created?
        3. What can I do on this app?
        4. What is your purpose?`;
    default:
      return "Sorry I don't understand what you're saying. Please try again.";
  }
}

async function bot_message(text, userId) {
  try {
    const res = await fetch(`http://127.0.0.1:3000/message/bot/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await res.json();

    return data.sent_message;
  } catch (err) {
    console.log(err);
  }
}

async function send_prompt_message(userId, setIsTexting, texts, setTexts) {
  setIsTexting(true);

  const text =
    "Feel free to ask me more questions. Type 'menu' to see the options again.";
  const message = await bot_message(text, userId);

  setTimeout(() => {
    setTexts([...texts, message]);
    setIsTexting(false);
  }, 2000);
}

export async function bot_response(
  userId,
  message,
  texts,
  setTexts,
  setIsTexting,
  setDisabled
) {
  setIsTexting(true);
  setDisabled(true);

  const text = get_response(message);
  const bot_text = await bot_message(text, userId);

  setTimeout(async () => {
    setTexts([...texts, bot_text]);
    setIsTexting(false);

    if (message !== PROMPTS.MENU) {
      await send_prompt_message(
        userId,
        setIsTexting,
        [...texts, bot_text],
        setTexts
      );
    }

    setDisabled(false);
  }, 1000);
}

const BOT_NAME = "friendzone";

export { BOT_NAME };
