import { NextResponse } from "next/server";
import {
  formatContactMessage,
  sendTelegramMessage,
  type ContactPayload,
} from "@/lib/telegram";

const MAX_LEN = 4000;

function trimField(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const body = json as Partial<ContactPayload>;

  const name = trimField(body.name, 120);
  const contact = trimField(body.contact, 200);
  const message = trimField(body.message, MAX_LEN);
  const topicId = trimField(body.topicId, 40);
  const topicTitle = trimField(body.topicTitle, 200);
  const company = trimField(body.company, 200) || undefined;
  const city = trimField(body.city, 120) || undefined;
  const budget = trimField(body.budget, 200) || undefined;
  const platform = trimField(body.platform, 120) || undefined;

  if (!name || !contact || !message || !topicId || !topicTitle) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const text = formatContactMessage({
    name,
    contact,
    message,
    topicId,
    topicTitle,
    company,
    city,
    budget,
    platform,
  });

  const result = await sendTelegramMessage(text);

  if (!result.ok) {
    console.error("[contact]", result.error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}