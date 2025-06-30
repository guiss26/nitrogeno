const reactionMap = {
  "N+N": "N2",
  "N2+O": "NO",
  "NO+O": "NO2",
  "NO2+H2O": "HNO3",
  "NO+NO": "N2O",
  "HNO3+HNO3": "N2",
  "N2+N2": "N4",
  "N2O+N2O": "N4O2",
};

function getReaction(a, b) {
  const key1 = `${a}+${b}`;
  const key2 = `${b}+${a}`;
  return reactionMap[key1] || reactionMap[key2] || null;
}

const WIN_VALUE = "N4O2";

export class Cell {
  constructor(gridElement, x, y) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.append(cell);
    this.x = x;
    this.y = y;
  }

  linkTile(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }

  unlinkTile() {
    this.linkedTile = null;
  }

  isEmpty() {
    return !this.linkedTile;
  }

  linkTileForMerge(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTileForMerge = tile;
  }

  unlinkTileForMerge() {
    this.linkedTileForMerge = null;
  }

  hasTileForMerge() {
    return !!this.linkedTileForMerge;
  }

  canAccept(newTile) {
    if (this.isEmpty()) return true;

    if (!this.hasTileForMerge()) {
      const result = getReaction(this.linkedTile.value, newTile.value);
      return !!result;
    }

    return false;
  }

  mergeTiles() {
    const result = getReaction(this.linkedTile.value, this.linkedTileForMerge.value);
    if (result) {
      this.linkedTile.setValue(result);
      this.linkedTileForMerge.removeFromDOM();
      this.unlinkTileForMerge();

      if (result === WIN_VALUE) {
        this.showWinPopup();
      }
    }
  }

  showWinPopup() {
    if (document.getElementById("win-popup")) return;

    const overlay = document.createElement("div");
    overlay.id = "win-popup";
    overlay.classList.add("popup-overlay");

    const popup = document.createElement("div");
    popup.classList.add("popup-window");

    const message = document.createElement("p");
    message.classList.add("popup-message");
    message.textContent = `¡Felicitaciones! ¡Has creado ${WIN_VALUE} y ganó el juego!`;

    const btnBack = document.createElement("button");
    btnBack.classList.add("popup-button", "btn-back");
    btnBack.textContent = "Volver atrás";

    const btnCreators = document.createElement("button");
    btnCreators.classList.add("popup-button", "btn-creators");
    btnCreators.textContent = "Creadoras";

    btnBack.addEventListener("click", () => {
      window.location.href = "../pages/juego.html";
    });

    btnCreators.addEventListener("click", () => {
      window.open("../pages/creadoras.html", "_blank");
    });

    popup.appendChild(message);
    popup.appendChild(btnBack);
    popup.appendChild(btnCreators);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
}
