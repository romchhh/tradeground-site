function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export type ContactPayload = {
  name: string;
  contact: string;
  message: string;
  topicId: string;
  topicTitle: string;
  company?: string;
  city?: string;
  budget?: string;
  platform?: string;
};

export function formatContactMessage(data: ContactPayload): string {
  const lines = [
    "<b>📩 Нове звернення з сайту TradeGround</b>",
    "",
    `<b>Тема:</b> ${escapeHtml(data.topicTitle)} <i>(${escapeHtml(data.topicId)})</i>`,
    `<b>Ім'я:</b> ${escapeHtml(data.name)}`,
  ];
  if (data.company) lines.push(`<b>Компанія:</b> ${escapeHtml(data.company)}`);
  if (data.city) lines.push(`<b>Місто:</b> ${escapeHtml(data.city)}`);
  lines.push(`<b>Контакт:</b> ${escapeHtml(data.contact)}`);
  if (data.budget) lines.push(`<b>Бюджет:</b> ${escapeHtml(data.budget)}`);
  if (data.platform) lines.push(`<b>Платформа:</b> ${escapeHtml(data.platform)}`);
  lines.push("", `<b>Повідомлення:</b>`, escapeHtml(data.message));
  return lines.join("\n");
}

export async function sendTelegramMessage(
  text: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_GROUP_ID;

  if (!token || !chatId) {
    return { ok: false, error: "Telegram is not configured" };
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
    cache: "no-store",
  });

  const body = (await res.json().catch(() => null)) as
    | { ok: boolean; description?: string }
    | null;

  if (!res.ok || !body?.ok) {
    return {
      ok: false,
      error: body?.description ?? `Telegram API error (${res.status})`,
    };
  }

  return { ok: true };
}