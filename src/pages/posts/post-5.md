---
layout: ../../layouts/MarkdownPostLayout.astro
title: Алгебраические фракталы
description: "Разбираем особенности и примеры алгебраических фракталов"
image:
  url: "/images/frac-alg.jpg"
  alt: "Слово «astro» на фоне иллюстрации планет и звезд."
tags: ["фракталы", "графика", "математика"]
---

# Алгебраические фракталы

Алгебраические фракталы — это фрактальные структуры, формируемые с помощью **итерационных процессов над комплексными числами**. Они широко используются в математике, визуализации, а также в цифровом искусстве.

## Основные характеристики

- Основаны на **итерационных** или **рекурсивных формулах**.
- Используют **комплексную плоскость**.
- Имеют бесконечную детализацию и самоподобие.
- Формируют **границы между стабильными и нестабильными точками**.

## Принцип построения

Чаще всего используется формула вида:

Где:
- `z` — комплексное число,
- `c` — константа,
- результат зависит от того, стремится ли последовательность к бесконечности.

---

## Интерактивное множество Мандельброта

<canvas id="mandelbrotCanvas" width="600" height="400" style="display: block; margin: 2rem auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.2);"></canvas>

<script is:inline>
const canvas = document.getElementById('mandelbrotCanvas');
const ctx = canvas.getContext('2d');
const maxIter = 100;

function drawMandelbrot() {
  const img = ctx.createImageData(canvas.width, canvas.height);

  const xmin = -2.5, xmax = 1;
  const ymin = -1, ymax = 1;
  const w = canvas.width, h = canvas.height;

  for (let px = 0; px < w; px++) {
    for (let py = 0; py < h; py++) {
      const x0 = xmin + (xmax - xmin) * px / w;
      const y0 = ymin + (ymax - ymin) * py / h;
      let x = 0, y = 0, iter = 0;

      while (x*x + y*y <= 4 && iter < maxIter) {
        const xtemp = x*x - y*y + x0;
        y = 2*x*y + y0;
        x = xtemp;
        iter++;
      }

      const color = iter === maxIter ? 0 : 255 - Math.floor(iter * 255 / maxIter);
      const i = (py * w + px) * 4;
      img.data[i + 0] = color;
      img.data[i + 1] = color;
      img.data[i + 2] = color;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
}

drawMandelbrot();
</script>

---

##  Примеры

- **Множество Мандельброта** — отображение устойчивых значений `zₙ` на комплексной плоскости.
- **Множество Жюлиа** — фиксированное `c`, меняется начальное значение `z`.

## Где применяются

- Образование и визуализация
- Компьютерная графика и эффекты
- Генеративное искусство
- Моделирование в природе и науке

---

> Алгебраические фракталы — это уникальный мост между математикой и визуальной эстетикой.
