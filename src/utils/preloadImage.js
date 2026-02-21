const preloaded = new Set();

/**
 * 링크 호버 시 해당 페이지 히어로 이미지를 미리 로드해, 클릭 후 로딩을 빠르게 함.
 * @param {string} url - 이미지 URL (import된 asset 또는 문자열)
 */
export function preloadImage(url) {
  if (!url || typeof url !== 'string' || preloaded.has(url)) return;
  preloaded.add(url);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
}
