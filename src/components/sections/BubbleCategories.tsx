"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useI18n } from "@/i18n/LanguageContext";

interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
  size: "large" | "medium" | "small";
}

interface Subcategory {
  id: string;
  label: string;
  items: string[];
}

const COLORS = ["#C0DB9A", "#D4E9B0", "#656B4D", "#EFF1F0", "#C5CBCB"];

const CATEGORIES: Category[] = [
  {
    id: "all",
    label: "Всі категорії",
    icon: "/categories_icons/all_categories.svg",
    color: COLORS[0],
    size: "large",
    subcategories: [
      { id: "popular", label: "Популярне", items: ["Нові оголошення", "Топ сьогодні", "Поруч зі мною"] },
      { id: "browse", label: "Огляд", items: ["Усі міста", "Онлайн зараз", "Знижки"] },
    ],
  },
  {
    id: "services",
    label: "Послуги та робота",
    icon: "/categories_icons/services_work.svg",
    color: COLORS[2],
    size: "large",
    subcategories: [
      { id: "jobs", label: "Вакансії", items: ["IT", "Сервіс", "Будівництво"] },
      { id: "services", label: "Послуги", items: ["Ремонт", "Переклад", "Краса"] },
      { id: "legal", label: "Юридичні", items: ["Документи", "Консультація", "Нотаріус"] },
    ],
  },
  {
    id: "fashion",
    label: "Мода та стиль",
    icon: "/categories_icons/fashion.svg",
    color: COLORS[1],
    size: "medium",
    subcategories: [
      { id: "women", label: "Жіноче", items: ["Одяг", "Взуття", "Аксесуари"] },
      { id: "men", label: "Чоловіче", items: ["Одяг", "Взуття", "Годинники"] },
    ],
  },
  {
    id: "furniture",
    label: "Меблі",
    icon: "/categories_icons/furniture.svg",
    color: COLORS[0],
    size: "medium",
    subcategories: [
      { id: "living", label: "Вітальня", items: ["Дивани", "Столи", "Шафи"] },
      { id: "bedroom", label: "Спальня", items: ["Ліжка", "Комоди", "Тумби"] },
    ],
  },
  {
    id: "electronics",
    label: "Електроніка",
    icon: "/categories_icons/electronics.svg",
    color: COLORS[3],
    size: "large",
    subcategories: [
      { id: "phones", label: "Смартфони", items: ["iPhone", "Samsung", "Pixel"] },
      { id: "laptops", label: "Ноутбуки", items: ["MacBook", "ThinkPad", "Dell"] },
      { id: "audio", label: "Аудіо", items: ["Навушники", "Колонки", "Мікрофони"] },
    ],
  },
  {
    id: "appliances",
    label: "Побутова техніка",
    icon: "/categories_icons/appliances.svg",
    color: COLORS[2],
    size: "medium",
    subcategories: [
      { id: "kitchen", label: "Кухня", items: ["Холодильник", "Плита", "Мікро downstreamка"] },
      { id: "laundry", label: "Прання", items: ["Пральна", "Сушарка", "Праска"] },
    ],
  },
  {
    id: "kids",
    label: "Дитячі товари",
    icon: "/categories_icons/kids.svg",
    color: COLORS[1],
    size: "medium",
    subcategories: [
      { id: "clothes", label: "Одяг", items: ["0–2 роки", "3–6 років", "7–12 років"] },
      { id: "toys", label: "Іграшки", items: ["Конструктори", "Ляльки", "Транспорт"] },
    ],
  },
  {
    id: "home",
    label: "Для дому",
    icon: "/categories_icons/home.svg",
    color: COLORS[0],
    size: "medium",
    subcategories: [
      { id: "decor", label: "Декор", items: ["Вази", "Картини", "Освітлення"] },
      { id: "kitchenware", label: "Посуд", items: ["Тарілки", "Каструлі", "Прибори"] },
    ],
  },
  {
    id: "beauty",
    label: "Краса та здоров'я",
    icon: "/categories_icons/beauty.svg",
    color: COLORS[4],
    size: "medium",
    subcategories: [
      { id: "care", label: "Догляд", items: ["Косметика", "Волосся", "Тіло"] },
      { id: "health", label: "Здоров'я", items: ["Вітаміни", "Масаж", "Спорт"] },
    ],
  },
  {
    id: "auto",
    label: "Авто",
    icon: "/categories_icons/auto.svg",
    color: COLORS[3],
    size: "medium",
    subcategories: [
      { id: "cars", label: "Автомобілі", items: ["BMW", "Mercedes", "VW"] },
      { id: "parts", label: "Запчастини", items: ["Двигун", "Кузов", "Колеса"] },
    ],
  },
  {
    id: "hobby",
    label: "Хобі / Спорт",
    icon: "/categories_icons/hobby_sports.svg",
    color: COLORS[0],
    size: "medium",
    subcategories: [
      { id: "sport", label: "Спорт", items: ["Велосипеди", "Тренажери", "Екіпірування"] },
      { id: "hobby", label: "Хобі", items: ["Музика", "Фото", "Ігри"] },
    ],
  },
  {
    id: "pets",
    label: "Улюбленці",
    icon: "/categories_icons/pets.svg",
    color: COLORS[1],
    size: "small",
    subcategories: [
      { id: "dogs", label: "Собаки", items: ["Корм", "Аксесуари", "Догляд"] },
      { id: "cats", label: "Коти", items: ["Корм", "Іграшки", "Лотки"] },
    ],
  },
  {
    id: "realestate",
    label: "Нерухомість",
    icon: "/categories_icons/realestate.svg",
    color: COLORS[2],
    size: "medium",
    subcategories: [
      { id: "rent", label: "Оренда", items: ["Квартири", "Кімнати", "Будинки"] },
      { id: "buy", label: "Купівля", items: ["Новобудова", "Вторинне", "Комерція"] },
    ],
  },
  {
    id: "free",
    label: "Безкоштовно / Віддам",
    icon: "/categories_icons/free.svg",
    color: COLORS[0],
    size: "small",
    subcategories: [
      { id: "giveaway", label: "Віддам", items: ["Меблі", "Одяг", "Техніка"] },
      { id: "freebies", label: "Безкоштовно", items: ["Книги", "Іграшки", "Інше"] },
    ],
  },
];

interface BubbleState {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  category: Category;
}

export default function BubbleCategories() {
  const { t, marketplace } = useI18n();
  const labelsRef = useRef(t.categories.labels);
  labelsRef.current = t.categories.labels;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<BubbleState[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999 });
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<Record<string, HTMLImageElement>>({});
  const [iconsReady, setIconsReady] = useState(false);

  const [selected, setSelected] = useState<Category | null>(null);
  const [selectedSub, setSelectedSub] = useState<Subcategory | null>(null);
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

  const catLabel = (cat: Category) =>
    labelsRef.current[cat.id] ?? cat.label;
  // Preload category icons
  useEffect(() => {
    let loaded = 0;
    const total = CATEGORIES.length;
    CATEGORIES.forEach((cat) => {
      const img = new Image();
      img.onload = () => {
        loaded += 1;
        if (loaded >= total) setIconsReady(true);
      };
      img.onerror = () => {
        loaded += 1;
        if (loaded >= total) setIconsReady(true);
      };
      img.src = cat.icon;
      iconsRef.current[cat.id] = img;
    });
  }, []);

  const initBubbles = useCallback((w: number, h: number) => {
    const mobile = w < 768;
    const scale = mobile ? (w < 400 ? 0.42 : 0.5) : 1;
    bubblesRef.current = CATEGORIES.map((cat, i) => {
      const baseRadius =
        (cat.size === "large" ? 100 : cat.size === "medium" ? 82 : 68) * scale;
      const angle =
        (i / CATEGORIES.length) * Math.PI * 2 -
        Math.PI / 2 +
        (Math.random() - 0.5) * 0.45;
      const r = Math.min(w, h) * (mobile ? 0.34 : 0.32);
      const jitter = mobile ? 0.75 : 0.5;
      return {
        id: cat.id,
        x: w / 2 + Math.cos(angle) * r * (0.5 + Math.random() * jitter),
        y: h / 2 + Math.sin(angle) * r * (0.5 + Math.random() * jitter),
        vx: (Math.random() - 0.5) * (mobile ? 1.0 : 0.8),
        vy: (Math.random() - 0.5) * (mobile ? 1.0 : 0.8),
        radius: baseRadius,
        category: cat,
      };
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setDimensions({ w, h });
      initBubbles(w, h);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [initBubbles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = dimensions;
    canvas.width = w;
    canvas.height = h;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const bubbles = bubblesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        if (selected) continue;

        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;
        if (dist < repelRadius && dist > 0) {
          const force = ((repelRadius - dist) / repelRadius) * 2;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }

        const cx = w / 2 - b.x;
        const cy = h / 2 - b.y;
        b.vx += cx * 0.0005;
        b.vy += cy * 0.0005;

        b.vx *= 0.97;
        b.vy *= 0.97;

        b.x += b.vx;
        b.y += b.vy;

        // Extra inset so hover scale + labels don't clip at edges
        const padX = b.radius * 1.12;
        const padY = b.radius * 1.28;
        if (b.x < padX) { b.x = padX; b.vx *= -0.6; }
        if (b.x > w - padX) { b.x = w - padX; b.vx *= -0.6; }
        if (b.y < padY) { b.y = padY; b.vy *= -0.6; }
        if (b.y > h - padY) { b.y = h - padY; b.vy *= -0.6; }

        for (let j = i + 1; j < bubbles.length; j++) {
          const b2 = bubbles[j];
          const ddx = b2.x - b.x;
          const ddy = b2.y - b.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          const minD = b.radius + b2.radius + 6;
          if (d < minD && d > 0) {
            const nx = ddx / d;
            const ny = ddy / d;
            const overlap = (minD - d) / 2;
            b.x -= nx * overlap;
            b.y -= ny * overlap;
            b2.x += nx * overlap;
            b2.y += ny * overlap;
            const relVx = b.vx - b2.vx;
            const relVy = b.vy - b2.vy;
            const dot = relVx * nx + relVy * ny;
            if (dot > 0) {
              b.vx -= dot * nx;
              b.vy -= dot * ny;
              b2.vx += dot * nx;
              b2.vy += dot * ny;
            }
          }
        }
      }

      // Hover scale
      let hoveredId: string | null = null;
      for (const b of bubbles) {
        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < b.radius) {
          hoveredId = b.id;
          break;
        }
      }

      for (const b of bubbles) {
        if (selected && b.id !== selected.id) {
          ctx.save();
          ctx.globalAlpha = 0.15;
        }

        const isHovered = hoveredId === b.id && !selected;
        const drawR = isHovered ? b.radius * 1.08 : b.radius;

        // Glow
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, drawR);
        gradient.addColorStop(0, b.category.color + (isHovered ? "55" : "33"));
        gradient.addColorStop(1, b.category.color + "00");
        ctx.beginPath();
        ctx.arc(b.x, b.y, drawR * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Circle
        ctx.beginPath();
        ctx.arc(b.x, b.y, drawR, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "rgba(44,48,36,0.95)" : "rgba(16,16,15,0.92)";
        ctx.fill();
        ctx.strokeStyle = b.category.color + (isHovered ? "AA" : "66");
        ctx.lineWidth = isHovered ? 2 : 1.5;
        ctx.stroke();

        // Icon
        const icon = iconsRef.current[b.id];
        const iconSize = drawR * (b.id === "free" ? 0.68 : 0.46);
        if (icon && icon.complete && icon.naturalWidth > 0) {
          const aspect = icon.naturalWidth / icon.naturalHeight;
          let iw = iconSize;
          let ih = iconSize;
          if (aspect > 1.4) {
            iw = iconSize * 1.35;
            ih = iw / aspect;
          } else if (aspect < 0.8) {
            ih = iconSize;
            iw = ih * aspect;
          }
          ctx.drawImage(icon, b.x - iw / 2, b.y - ih / 2 - drawR * 0.14, iw, ih);
        }

        // Label — wrap long names
        const label = labelsRef.current[b.id] ?? b.category.label;
        const fontSize = Math.min(drawR * 0.2, 14);
        ctx.font = `600 ${fontSize}px 'DM Sans', sans-serif`;
        ctx.fillStyle = "#EFF1F0";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const maxW = drawR * 1.55;
        if (ctx.measureText(label).width > maxW && label.includes(" ")) {
          const parts = label.split(" ");
          const mid = Math.ceil(parts.length / 2);
          const line1 = parts.slice(0, mid).join(" ");
          const line2 = parts.slice(mid).join(" ");
          ctx.fillText(line1, b.x, b.y + drawR * 0.32);
          ctx.fillText(line2, b.x, b.y + drawR * 0.32 + fontSize * 1.15);
        } else {
          ctx.fillText(label, b.x, b.y + drawR * 0.38);
        }

        if (selected && b.id !== selected.id) {
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions, selected, iconsReady]);

  const openCategory = useCallback((cat: Category) => {
    if (selected?.id === cat.id) {
      setSelected(null);
      setSelectedSub(null);
      return;
    }
    setSelected(cat);
    setSelectedSub(null);
    bubblesRef.current.forEach((bb) => {
      if (bb.id !== cat.id) {
        const angle = Math.random() * Math.PI * 2;
        bb.vx += Math.cos(angle) * 5;
        bb.vy += Math.sin(angle) * 5;
      }
    });
  }, [selected]);

  const handleCanvasClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (const b of bubblesRef.current) {
        const dx = cx - b.x;
        const dy = cy - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < b.radius) {
          openCategory(b.category);
          return;
        }
      }
      setSelected(null);
      setSelectedSub(null);
    },
    [openCategory]
  );

  const handlePointerMove = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  return (
    <section
      id="categories"
      className="snap-section relative overflow-x-hidden bg-bg pb-10 md:pb-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[35%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(192,219,154,0.35) 0%, transparent 65%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      <div className="site-container relative z-20 pt-14 pb-2 md:pt-24 md:pb-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            {t.categories.title.split(". ").map((part, i, arr) => (
              <span key={part}>
                {i === arr.length - 1 ? (
                  <span className="text-accent">{part}</span>
                ) : (
                  <>
                    {part}.
                    <br />
                  </>
                )}
              </span>
            ))}
          </h2>
          <p className="section-subtitle section-subtitle-center">
            {t.categories.subtitle}
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[1400px] overflow-hidden px-1 pb-6 pt-2 sm:overflow-visible sm:px-2 md:px-4 md:pb-12 md:pt-6"
        style={{ height: "min(58svh, 560px)", minHeight: 320 }}
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
          onTouchStart={(e) => {
            const t = e.touches[0];
            if (t) handlePointerMove(t.clientX, t.clientY);
          }}
          onTouchMove={(e) => {
            const t = e.touches[0];
            if (t) handlePointerMove(t.clientX, t.clientY);
          }}
          className="absolute inset-0 cursor-pointer touch-manipulation"
          style={{ width: "100%", height: "100%" }}
        />

        {selected && (
          <div className="absolute top-3 left-1/2 z-30 w-full max-w-lg -translate-x-1/2 px-4 md:top-4">
            <div className="liquid-glass rounded-2xl p-4 md:p-5">
              <div className="relative z-10 mb-3 flex items-center gap-2.5 md:mb-4 md:gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.icon}
                  alt=""
                  className="h-7 w-7 object-contain md:h-8 md:w-8"
                />
                <h3 className="font-display text-base font-bold text-text md:text-lg">
                  {catLabel(selected)}
                </h3>
                <button
                  onClick={() => { setSelected(null); setSelectedSub(null); }}
                  className="ml-auto text-sm text-muted transition-colors hover:text-text"
                >
                  ✕
                </button>
              </div>

              {!selectedSub ? (
                <div className="relative z-10 flex flex-wrap gap-2">
                  {selected.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={(e) => { e.stopPropagation(); setSelectedSub(sub); }}
                      className="rounded-full border px-3 py-1.5 font-body text-xs transition-all duration-200 hover:scale-105 md:px-4 md:py-2 md:text-sm"
                      style={{ borderColor: selected.color + "66", color: selected.color }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="relative z-10">
                  <button
                    onClick={() => setSelectedSub(null)}
                    className="mb-2 flex items-center gap-1 text-xs text-muted transition-colors hover:text-text md:mb-3"
                  >
                    ← {catLabel(selected)}
                  </button>
                  <h4 className="mb-2 font-display text-sm font-semibold text-text md:mb-3">
                    {selectedSub.label}
                  </h4>
                  <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
                    {selectedSub.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-body text-[11px] text-text md:px-3 md:py-1.5 md:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm font-bold transition-colors"
                    style={{ color: selected.color }}
                  >
                    {t.categories.openMarketplace} →
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
