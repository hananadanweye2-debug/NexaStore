const styles = {
  page: {
    minHeight: "100vh",
    background: "#fff",
    padding: 15,
    paddingBottom: 90,
    fontFamily: "Arial",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  cart: {
    fontSize: 22,
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -8,
    right: -10,
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: 12,
  },

  searchWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
  },

  search: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: 12,
    border: "1px solid #ddd",
    fontSize: 16,
    outline: "none",
  },

  clearBtn: {
    padding: "10px 12px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    background: "#eee",
  },

  categories: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    margin: "15px 0",
  },

  cat: {
    padding: "8px 12px",
    borderRadius: 20,
    border: "1px solid #ddd",
    background: "#f9f9f9",
    cursor: "pointer",
  },

  activeCat: {
    padding: "8px 12px",
    borderRadius: 20,
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },

  subBar: {
    display: "flex",
    gap: 8,
    marginBottom: 10,
    overflowX: "auto",
  },

  sub: {
    padding: "6px 12px",
    borderRadius: 20,
    border: "1px solid #ddd",
    background: "#f9f9f9",
    cursor: "pointer",
  },

  activeSub: {
    padding: "6px 12px",
    borderRadius: 20,
    border: "none",
    background: "#333",
    color: "#fff",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,
  },

  card: {
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 10,
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    cursor: "pointer",
  },

  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
    margin: "6px 0",
  },

  price: {
    fontSize: 14,
    color: "#444",
  },

  btn: {
    flex: 1,
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "8px 10px",
    cursor: "pointer",
  },

  wishlistBtn: {
    flex: 1,
    background: "#0c0a0b",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: 10,
    cursor: "pointer",
  },

  cartBox: {
    position: "fixed",
    right: 10,
    bottom: 10,
    width: 280,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 10,
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    marginBottom: 6,
  },

  removeBtn: {
    border: "none",
    background: "red",
    color: "#fff",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 10,
    padding: "2px 6px",
  },

  darkBtn: {
    position: "fixed",
    top: 20,
    right: 20,
    padding: "8px 12px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    zIndex: 999,
  },

  navBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 14,
    gap: 4,
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: 20,
    boxSizing: "border-box",
  },

  modal: {
    width: "100%",
    maxWidth: 350,
    padding: 20,
    borderRadius: 15,
    position: "relative",
    boxSizing: "border-box",
  },

  modalImage: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 12,
  },

  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "red",
    color: "#fff",
    borderRadius: "50%",
    width: 30,
    height: 30,
    cursor: "pointer",
  },

  accountPage: {
    minHeight: "100vh",
    padding: 20,
    paddingBottom: 100,
    boxSizing: "border-box",
  },

  accountHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  accountIconBtn: {
    border: "none",
    background: "transparent",
    fontSize: 22,
    cursor: "pointer",
  },

  accountSearch: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    borderRadius: 12,
    padding: "10px 14px",
    marginBottom: 20,
    border: "1px solid #ddd",
  },

  accountSearchInput: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: 15,
  },

  welcomeCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },

  accountAvatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
  },

  accountAvatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    flexShrink: 0,
  },

  balanceCard: {
    color: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceBtn: {
    border: "none",
    background: "#fff",
    color: "#111",
    padding: "10px 15px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
  },

  accountSection: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  sectionTitle: {
    fontSize: 16,
    margin: "10px 10px 5px",
  },

  accountItem: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 10px",
    border: "none",
    borderBottom: "1px solid #eee",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    fontSize: 15,
    color: "inherit",
  },

  logoutBtn: {
    width: "100%",
    padding: 15,
    marginTop: 10,
    border: "none",
    borderRadius: 10,
    background: "#dc3545",
    color: "#fff",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "bold",
  },

  profileCard: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 10,
  },

  settingsCard: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
  },

  settingBtn: {
    width: "100%",
    padding: 15,
    marginTop: 10,
    border: "1px solid #ddd",
    borderRadius: 10,
    background: "#f8f9fa",
    cursor: "pointer",
    textAlign: "left",
    fontSize: 15,
  },
};

export default styles;