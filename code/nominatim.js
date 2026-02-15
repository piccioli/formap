/**
 * Logica per reverse geocoding con Nominatim (OpenStreetMap).
 * Espone Nominatim.fetchReverseGeocode() e Nominatim.formatErrorHtml().
 */
const Nominatim = (function () {
  const BASE_URL = 'https://nominatim.openstreetmap.org/reverse';

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Effettua reverse geocoding per lat/lng.
   * @param {number} lat - Latitudine
   * @param {number} lng - Longitudine
   * @returns {Promise<{ popupHtml: string, json: object, jsonStr: string }>}
   */
  async function fetchReverseGeocode(lat, lng) {
    const url = `${BASE_URL}?lat=${lat}&lon=${lng}&format=json`;
    const res = await fetch(url, {
      headers: { 'User-Agent': `${CONFIG.appName}/${CONFIG.version}` },
    });
    const json = await res.json();
    const jsonStr = JSON.stringify(json, null, 2);

    const addr = json.address || {};
    const comune = addr.city || addr.town || addr.village || addr.municipality || '-';
    const popupHtml = `<div class="coord-popup">
      <h3>Punto selezionato</h3>
      <p><strong>Paese:</strong> ${escapeHtml(addr.country || '-')}</p>
      <p><strong>Regione:</strong> ${escapeHtml(addr.state || '-')}</p>
      <p><strong>Provincia:</strong> ${escapeHtml(addr.county || '-')}</p>
      <p><strong>Comune:</strong> ${escapeHtml(comune)}</p>
      <p><strong>Indirizzo completo:</strong> ${escapeHtml(json.display_name || '-')}</p>
      <p><strong>Coordinate:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p>
    </div>`;

    return { popupHtml, json, jsonStr };
  }

  /**
   * Genera HTML popup per errore Nominatim.
   * @param {number} lat - Latitudine
   * @param {number} lng - Longitudine
   * @param {Error} err - Errore
   * @returns {string}
   */
  function formatErrorHtml(lat, lng, err) {
    return `<div class="coord-popup">
      <strong>Latitudine:</strong> ${lat.toFixed(6)}<br>
      <strong>Longitudine:</strong> ${lng.toFixed(6)}<br>
      <span style="color:#c00;">Errore Nominatim: ${escapeHtml(err.message)}</span>
    </div>`;
  }

  return {
    fetchReverseGeocode,
    formatErrorHtml,
  };
})();
