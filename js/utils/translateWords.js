export default async function translateWords(words) {
  if (words) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200427T173412Z.faf51b65cd039073.f96213a5294f7181ca021f4cafa3026300e8115f&text=${words}&lang=ru-en`;
    const res = await fetch(url);
    const data = await res.json();
    return data.text[0];
  }
  return 'Enter words for search.....';
}
