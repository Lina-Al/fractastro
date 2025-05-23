---
layout: ../../layouts/MarkdownPostLayout.astro
title: Стохастические фракталы
description: "Разбираем особенности и примеры стохастических фракталов"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "Слово «astro» на фоне иллюстрации планет и звезд."
tags: ["фракталы", "графика", "математика"]
---

# Стохастические фракталы

Стохастические фракталы создаются с использованием элементов случайности. Они незаменимы при моделировании природных форм — деревьев, гор, облаков.

---

## Анимация стохастического дерева

<canvas id="treeCanvas" width="500" height="400" style="display: block; margin: auto; background: #eef2ff; border-radius: 10px;"></canvas>

<script is:inline>
  const canvas = document.getElementById("treeCanvas");
  const ctx = canvas.getContext("2d");

  function drawBranch(x, y, length, angle, depth) {
    if (depth === 0) return;

    const x2 = x + length * Math.cos(angle);
    const y2 = y - length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `hsl(${depth * 30}, 70%, 40%)`;
    ctx.lineWidth = depth;
    ctx.stroke();

    const newLength = length * (0.7 + Math.random() * 0.15);
    const angleVariation = 0.2 + Math.random() * 0.3;

    drawBranch(x2, y2, newLength, angle - angleVariation, depth - 1);
    drawBranch(x2, y2, newLength, angle + angleVariation, depth - 1);
  }

  function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBranch(250, 380, 60, Math.PI / 2, 7);
  }

  drawTree();
  setInterval(drawTree, 3000); // обновление каждые 3 секунды
</script>

---

## Как работает

Скрипт очищает холст и рисует новое дерево каждые 3 секунды. Каждое дерево — уникально, благодаря случайным параметрам в алгоритме ветвления.

---

## Интересно

- Можно изменить глубину дерева (`depth`), чтобы получить более густую или простую крону.
- Цвета и длины можно адаптировать под сезон (напр., осенние оттенки).
