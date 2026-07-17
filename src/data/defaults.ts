// Фото «по умолчанию», вшитые в сайт (видят все по ссылке).
// Всё, что лежит в src/photos/ с именем-слотом (напр. s01_hero.jpg),
// подхватывается автоматически при сборке. Формат: jpg/jpeg/png/webp.

const modules = import.meta.glob("../photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const defaultPhotos: Record<string, string> = {};
for (const path in modules) {
  const base = path
    .split("/")
    .pop()!
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");
  defaultPhotos[base] = modules[path] as string;
}

export const photoSrc = (id: string, uploaded?: string): string | undefined =>
  uploaded || defaultPhotos[id];
