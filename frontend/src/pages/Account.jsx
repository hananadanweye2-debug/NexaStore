import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Account() {
  // =====================================================
  // STATE
  // =====================================================

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [notifications, setNotifications] = useState(true);
  const [activePanel, setActivePanel] = useState(null); 
  const [helpView, setHelpView] = useState(null);
  const [search, setSearch] = useState("");

  const [country, setCountry] = useState(
  localStorage.getItem("nexastoreCountry") || "Kenya"
);

const [language, setLanguage] = useState(
  localStorage.getItem("nexastoreLanguage") || "English"
);

  // =====================================================
  // FIREBASE AUTHENTICATION
  // =====================================================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Firebase user:", currentUser);

      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // =====================================================
  // DARK MODE
  // =====================================================

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    document.body.style.backgroundColor = darkMode
      ? "#111111"
      : "#f5f5f5";

    document.body.style.margin = "0";
    document.body.style.transition =
      "background-color 0.2s ease";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [darkMode]);

  // =====================================================
// COUNTRY
// =====================================================

useEffect(() => {
  localStorage.setItem(
    "nexastoreCountry",
    country
  );
}, [country]);


// =====================================================
// LANGUAGE
// =====================================================

useEffect(() => {
  localStorage.setItem(
    "nexastoreLanguage",
    language
  );
}, [language]);


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // =====================================================
  // PANELS
  // =====================================================

 const openPanel = (panel) => {
  setActivePanel(panel);

  // Reset Help & Support navigation
  if (panel !== "help") {
    setHelpView(null);
  }
};

const closePanel = () => {
  setActivePanel(null);
  setHelpView(null);
};

  // =====================================================
  // USER NAME
  // =====================================================

  const userName = useMemo(() => {
    if (!user) return "Guest";

    if (user.displayName?.trim()) {
      return user.displayName.trim();
    }

    if (user.email) {
      return user.email.split("@")[0];
    }

    return "User";
  }, [user]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginCard}>
          <div style={styles.loginIcon}>👤</div>

          <h2 style={styles.loginTitle}>
            Loading account...
          </h2>

          <p style={styles.loginText}>
            Please wait while we load your account.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // NOT LOGGED IN
  // =====================================================

  if (!user) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginCard}>
          <div style={styles.loginIcon}>👤</div>

          <h2 style={styles.loginTitle}>
            Welcome to NexaStore
          </h2>

          <p style={styles.loginText}>
            Please sign in to access your account.
          </p>

          <button
            style={styles.loginButton}
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // ACCOUNT ITEMS
  // =====================================================

  const accountItems = [
    {
      id: "orders",
      icon: "📦",
      title: "Orders",
      action: () => openPanel("orders"),
    },

    {
      id: "inbox",
      icon: "✉️",
      title: "Inbox",
      action: () => openPanel("inbox"),
    },

    {
      id: "reviews",
      icon: "⭐",
      title: "Ratings & Reviews",
      action: () => openPanel("reviews"),
    },

    {
      id: "vouchers",
      icon: "🎟️",
      title: "Vouchers",
      action: () => openPanel("vouchers"),
    },

    {
      id: "wishlist",
      icon: "♡",
      title: "Wishlist",
      action: () => {
        window.location.href = "/wishlist";
      },
    },

    {
      id: "sellers",
      icon: "🏪",
      title: "Followed Sellers",
      action: () => openPanel("sellers"),
    },

    {
      id: "recent",
      icon: "◉",
      title: "Recently Viewed",
      action: () => openPanel("recent"),
    },
  ];

  // =====================================================
  // SETTINGS ITEMS
  // =====================================================

  const settingsItems = [
    {
      id: "payment",
      icon: "💳",
      title: "Payment Settings",
      action: () => openPanel("payment"),
    },

    {
      id: "addresses",
      icon: "📍",
      title: "Address Book",
      action: () => openPanel("addresses"),
    },

    {
      id: "notifications",
      icon: "🔔",
      title: "Notifications",
      action: () =>
        setNotifications(!notifications),
      toggle: true,
      enabled: notifications,
    },

    {
      id: "privacy",
      icon: "🔐",
      title: "Privacy & Security",
      action: () => openPanel("security"),
    },

    {
      id: "dark-mode",
      icon: "🌙",
      title: "Dark Mode",
      action: () => setDarkMode(!darkMode),
      toggle: true,
      enabled: darkMode,
    },
  ];

  // =====================================================
  // SEARCH
  // =====================================================

  const query = search.trim().toLowerCase();

  const filteredAccountItems = query
    ? accountItems.filter((item) =>
        item.title.toLowerCase().includes(query)
      )
    : accountItems;

  const filteredSettingsItems = query
    ? settingsItems.filter((item) =>
        item.title.toLowerCase().includes(query)
      )
    : settingsItems;

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div
      style={{
        ...styles.page,
        backgroundColor: darkMode
          ? "#111111"
          : "#f5f5f5",
        color: darkMode
          ? "#ffffff"
          : "#111111",
      }}
    >
      <main style={styles.content}>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div
          style={{
            ...styles.searchContainer,
            backgroundColor: darkMode
              ? "#252525"
              : "#eeeeee",
          }}
        >
          <span
            style={{
              ...styles.searchIcon,
              color: darkMode
                ? "#cccccc"
                : "#555555",
            }}
          >
            ⌕
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search on NexaStore"
            style={{
              ...styles.searchInput,
              color: darkMode
                ? "#ffffff"
                : "#333333",
            }}
          />

          {search && (
            <button
              style={styles.clearSearch}
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>

        {/* =================================================
            WELCOME USER
        ================================================= */}

        <section
          style={{
            ...styles.welcomeSection,
            backgroundColor: darkMode
              ? "#1c1c1c"
              : "#ffffff",
          }}
        >
          <div style={styles.welcomeLeft}>

            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                style={styles.profileImage}
              />
            ) : (
              <div
                style={{
                  ...styles.profileFallback,
                  backgroundColor: darkMode
                    ? "#333333"
                    : "#eeeeee",
                  color:"#2563EB",

                }}
              >
                {userName
                  .charAt(0)
                  .toUpperCase()}
              </div>
            )}

            <div style={styles.welcomeText}>

              <h1
                style={{
                  ...styles.welcomeTitle,
                  color: darkMode
                    ? "#ffffff"
                    : "#333333",
                }}
              >
                Welcome{" "}
                {userName.toUpperCase()}!
              </h1>

              <p
                style={{
                  ...styles.email,
                  color: darkMode
                    ? "#aaaaaa"
                    : "#777777",
                }}
              >
                {user.email}
              </p>

            </div>
          </div>
        </section>

        {/* =================================================
            BALANCE
        ================================================= */}

        <section
          style={{
            ...styles.balanceRow,
            backgroundColor: darkMode
              ? "#1c1c1c"
              : "#ffffff",
          }}
        >
          <div style={styles.balanceLeft}>

            <div style={styles.balanceIcon}>
              ▣
            </div>

            <div>
              <div
                style={{
                  ...styles.balanceText,
                  color: darkMode
                    ? "#ffffff"
                    : "#333333",
                }}
              >
                NexaStore balance
              </div>

              <div style={styles.balanceAmount}>
                KSh 0
              </div>
            </div>

          </div>

          <button
            style={styles.addMoneyButton}
            onClick={() =>
              openPanel("payment")
            }
          >
            Add Money
          </button>
        </section>

        {/* =================================================
            SUPPORT BUTTONS
        ================================================= */}

        <div
          style={{
            ...styles.supportButtons,
            backgroundColor: darkMode
              ? "#1c1c1c"
              : "#ffffff",
          }}
        >
          <button
  style={styles.liveChatButton}
  onClick={() => {
    setActivePanel("help");
    setHelpView("contact");
  }}
>
            <span style={styles.supportIcon}>
              ▣
            </span>
            Live Chat
          </button>

          <button
            style={{
              ...styles.whatsappButton,
              backgroundColor: darkMode
                ? "#1c1c1c"
                : "#ffffff",
            }}
            onClick={() =>
              openPanel("whatsapp")
            }
          >
            <span style={styles.whatsappIcon}>
              ◉
            </span>
            WhatsApp
          </button>
        </div>

        {/* =================================================
            NEED ASSISTANCE
        ================================================= */}

        <AccountSection
          title="Need Assistance?"
          darkMode={darkMode}
        >
          <SimpleAccountRow
            icon="ⓘ"
            title="Help & Support"
            darkMode={darkMode}
            onClick={() =>
              openPanel("help")
            }
          />
        </AccountSection>

        {/* =================================================
            MY ACCOUNT
        ================================================= */}

        <AccountSection
          title="My NexaStore Account"
          darkMode={darkMode}
        >
          {filteredAccountItems.length > 0 ? (
            filteredAccountItems.map(
              (item) => (
                <SimpleAccountRow
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  darkMode={darkMode}
                  onClick={item.action}
                />
              )
            )
          ) : (
            <EmptySearch
              darkMode={darkMode}
            />
          )}
        </AccountSection>

        {/* =================================================
            SETTINGS
        ================================================= */}

        <AccountSection
          title="My Settings"
          darkMode={darkMode}
        >
          {filteredSettingsItems.length > 0 ? (
            filteredSettingsItems.map(
              (item) => (
                <SimpleAccountRow
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  darkMode={darkMode}
                  onClick={item.action}
                  toggle={item.toggle}
                  enabled={item.enabled}
                />
              )
            )
          ) : (
            <EmptySearch
              darkMode={darkMode}
            />
          )}
        </AccountSection>

        {/* =================================================
            LOGOUT
        ================================================= */}

        <AccountSection
          title="Account"
          darkMode={darkMode}
        >
          <SimpleAccountRow
            icon="🚪"
            title="Logout"
            darkMode={darkMode}
            onClick={handleLogout}
            danger
            hideArrow
          />
        </AccountSection>

        <div style={styles.footerSpace} />

      </main>

      {/* ===================================================
          MODALS
      =================================================== */}

      {activePanel && (
        <div
          style={styles.modalOverlay}
          onClick={closePanel}
        >
          <div
            style={{
              ...styles.modal,
              backgroundColor: darkMode
                ? "#202020"
                : "#ffffff",
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              style={styles.closeButton}
              onClick={closePanel}
            >
              ×
            </button>

            {activePanel === "orders" && (
              <Panel
                icon="📦"
                title="Orders"
                text="You don't have any orders yet."
                button="Start Shopping"
                onClick={() => {
                  window.location.href = "/";
                }}
                darkMode={darkMode}
              />
            )}

            {activePanel === "inbox" && (
              <Panel
                icon="✉️"
                title="Inbox"
                text="Your messages and order updates will appear here."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "reviews" && (
              <Panel
                icon="⭐"
                title="Ratings & Reviews"
                text="Your product reviews will appear here."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "vouchers" && (
              <Panel
                icon="🎟️"
                title="Vouchers"
                text="You currently have no vouchers available."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "sellers" && (
              <Panel
                icon="🏪"
                title="Followed Sellers"
                text="Stores and sellers you follow will appear here."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "recent" && (
              <Panel
                icon="◉"
                title="Recently Viewed"
                text="Products you've recently viewed will appear here."
                button="Continue Shopping"
                onClick={() => {
                  window.location.href = "/";
                }}
                darkMode={darkMode}
              />
            )}

            {activePanel === "payment" && (
              <Panel
                icon="💳"
                title="Payment Settings"
                text="Manage your payment methods here."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "addresses" && (
              <Panel
                icon="📍"
                title="Address Book"
                text="Manage your delivery addresses here."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "security" && (
              <Panel
                icon="🔐"
                title="Privacy & Security"
                text="Your account is securely connected through Firebase Authentication."
                button="Done"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}

            {activePanel === "help" && (
  <HelpSupportPanel
    darkMode={darkMode}
    helpView={helpView}
    setHelpView={setHelpView}
    closePanel={closePanel}
    country={country}
    setCountry={setCountry}
    language={language}
    setLanguage={setLanguage}
  />
)}



            {activePanel === "whatsapp" && (
              <Panel
                icon="◉"
                title="WhatsApp Support"
                text="WhatsApp support can be connected here when you are ready."
                button="Close"
                onClick={closePanel}
                darkMode={darkMode}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// =====================================================
// HELP & SUPPORT PANEL
// =====================================================

function HelpSupportPanel({
  darkMode,
  helpView,
  setHelpView,
  closePanel,
  country,
  setCountry,
  language,
  setLanguage,
}) {

  // ---------------------------------------------------
  // SUB-PAGES
  // ---------------------------------------------------

  if (helpView === "about") {
    return (
      <HelpSubPage
        icon="ℹ️"
        title="About NexaStore"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <p style={helpStyles.description}>
          NexaStore is a modern marketplace designed to
          make shopping simple, convenient and secure.
        </p>

        <HelpInfoBox darkMode={darkMode}>
          <strong>Our mission</strong>
          <br />
          To connect customers with trusted sellers and
          make everyday shopping easier.
        </HelpInfoBox>
      </HelpSubPage>
    );
  }

  if (helpView === "services") {
    return (
      <HelpSubPage
        icon="🛍️"
        title="NexaStore Services"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <HelpOptionInfo
          icon="🛒"
          title="Online Shopping"
          text="Discover products from different sellers in one place."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="📦"
          title="Order Delivery"
          text="Track your purchases and receive your orders at your preferred address."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="💳"
          title="Secure Payments"
          text="Manage your payment methods and NexaStore balance."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="💬"
          title="Customer Support"
          text="Get assistance with orders, payments, sellers and your account."
          darkMode={darkMode}
        />
      </HelpSubPage>
    );
  }

  if (helpView === "centre") {
    return (
      <HelpSubPage
        icon="❓"
        title="Help Centre"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <HelpOptionInfo
          icon="📦"
          title="Orders & Delivery"
          text="Find help with placing orders, tracking deliveries and receiving purchases."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="💳"
          title="Payments"
          text="Get help with payments, refunds and your NexaStore balance."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="👤"
          title="Account"
          text="Manage your profile, password, security and account settings."
          darkMode={darkMode}
        />

        <HelpOptionInfo
          icon="🏪"
          title="Sellers"
          text="Learn more about sellers, products, reviews and seller communication."
          darkMode={darkMode}
        />
      </HelpSubPage>
    );
  }
    if (helpView === "faq") {
    return (
      <HelpSubPage
        icon="📚"
        title="Frequently Asked Questions"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <FaqItem
          question="How do I place an order?"
          answer="Browse NexaStore, select the product you want, add it to your cart and continue to checkout."
          darkMode={darkMode}
        />

        <FaqItem
          question="How can I track my order?"
          answer="Open your Orders section from your account to view your order status and delivery information."
          darkMode={darkMode}
        />

        <FaqItem
          question="What payment methods are supported?"
          answer="NexaStore supports the payment methods available during checkout. Your available options may depend on your country."
          darkMode={darkMode}
        />

        <FaqItem
          question="Can I cancel my order?"
          answer="Order cancellation depends on the current status of your order. Contact Support as soon as possible if you need assistance."
          darkMode={darkMode}
        />

        <FaqItem
          question="How do I contact NexaStore Support?"
          answer="Use Live Chat or WhatsApp Support from your Account page to contact the NexaStore support team."
          darkMode={darkMode}
        />

        <FaqItem
          question="How do I change my country?"
          answer="Open Account → Help & Support → Country and select your preferred country."
          darkMode={darkMode}
        />

        <FaqItem
          question="How do I change my language?"
          answer="Open Account → Help & Support → Language and select English or Kiswahili."
          darkMode={darkMode}
        />
      </HelpSubPage>
    );
  }

  if (helpView === "contact") {
    return (
      <HelpSubPage
        icon="💬"
        title="Contact Support"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <p style={helpStyles.description}>
          Need help? Choose one of the available support
          options below.
        </p>

        <button
  style={helpStyles.primaryButton}
  onClick={() => setHelpView("chat")}
>
  💬 Start Live Chat
</button>

        <button
          style={{
            ...helpStyles.secondaryButton,
            color: darkMode ? "#25d366" : "#159447",
            borderColor: "#25d366",
          }}
          onClick={() => {
            setHelpView(null);
            openWhatsAppSupport();
          }}
        >
          ◉ Contact us on WhatsApp
        </button>
      </HelpSubPage>
    );
  }
    if (helpView === "chat") {
    return (
      <HelpSubPage
        icon="💬"
        title="Live Chat"
        darkMode={darkMode}
        onBack={() => setHelpView("contact")}
      >
        <div
          style={{
            ...helpStyles.chatBox,
            backgroundColor: darkMode
              ? "#292929"
              : "#f7f7f7",
          }}
        >
          <div
            style={{
              ...helpStyles.chatMessage,
              backgroundColor: darkMode
                ? "#333333"
                : "#ffffff",
              color: darkMode
                ? "#ffffff"
                : "#333333",
            }}
          >
            👋 Hello! Welcome to NexaStore Support.
            How can we help you today?
          </div>
        </div>

        <textarea
          placeholder="Type your message..."
          style={{
            ...helpStyles.textarea,
            backgroundColor: darkMode
              ? "#292929"
              : "#ffffff",
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        />

        <button
          style={helpStyles.primaryButton}
          onClick={() => {
            alert("Your message has been sent to NexaStore Support.");
          }}
        >
          Send Message
        </button>
      </HelpSubPage>
    );
  }

  if (helpView === "problem") {
    return (
      <HelpSubPage
        icon="⚠️"
        title="Report a Problem"
        darkMode={darkMode}
        onBack={() => setHelpView(null)}
      >
        <p style={helpStyles.description}>
          Tell us what went wrong and our team can look
          into it.
        </p>

        <textarea
          placeholder="Describe the problem..."
          style={{
            ...helpStyles.textarea,
            backgroundColor: darkMode
              ? "#292929"
              : "#f7f7f7",
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        />

        <button
          style={helpStyles.primaryButton}
          onClick={() => {
            alert("Your report has been submitted.");
            setHelpView(null);
          }}
        >
          Submit Report
        </button>
      </HelpSubPage>
    );
  }// ---------------------------------------------------
// COUNTRY
// ---------------------------------------------------

if (helpView === "country") {
  return (
    <HelpSubPage
      icon="🌍"
      title="Country"
      darkMode={darkMode}
      onBack={() => setHelpView(null)}
    >
      <p style={helpStyles.description}>
        Choose the country where you use NexaStore.
        This helps us provide the right shopping,
        delivery and payment experience.
      </p>

      <div
        style={{
          ...helpStyles.selectionCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#f8f8f8",
        }}
      >
        <CountryOption
          flag="🇰🇪"
          name="Kenya"
          selected={country === "Kenya"}
          darkMode={darkMode}
          onClick={() => setCountry("Kenya")}
        />

        <CountryOption
          flag="🇺🇬"
          name="Uganda"
          selected={country === "Uganda"}
          darkMode={darkMode}
          onClick={() => setCountry("Uganda")}
        />

        <CountryOption
          flag="🇹🇿"
          name="Tanzania"
          selected={country === "Tanzania"}
          darkMode={darkMode}
          onClick={() => setCountry("Tanzania")}
        />

        <CountryOption
          flag="🇷🇼"
          name="Rwanda"
          selected={country === "Rwanda"}
          darkMode={darkMode}
          onClick={() => setCountry("Rwanda")}
        />
      </div>

      <div
        style={{
          ...helpStyles.selectedNotice,
          color: darkMode
            ? "#aaaaaa"
            : "#777777",
        }}
      >
        Current country:{" "}
        <strong
          style={{
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {country}
        </strong>
      </div>
    </HelpSubPage>
  );
}
// ---------------------------------------------------
// LANGUAGE
// ---------------------------------------------------

if (helpView === "language") {
  return (
    <HelpSubPage
      icon="🗣️"
      title="Language"
      darkMode={darkMode}
      onBack={() => setHelpView(null)}
    >
      <p style={helpStyles.description}>
        Choose the language you would like to use
        throughout NexaStore.
      </p>

      <div
        style={{
          ...helpStyles.selectionCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#f8f8f8",
        }}
      >
        <LanguageOption
          name="English"
          selected={language === "English"}
          darkMode={darkMode}
          onClick={() => setLanguage("English")}
        />

        <LanguageOption
          name="Kiswahili"
          selected={language === "Kiswahili"}
          darkMode={darkMode}
          onClick={() => setLanguage("Kiswahili")}
        />
      </div>

      <div
        style={{
          ...helpStyles.selectedNotice,
          color: darkMode
            ? "#aaaaaa"
            : "#777777",
        }}
      >
        Current language:{" "}
        <strong
          style={{
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {language}
        </strong>
      </div>

      {language === "Kiswahili" && (
        <div
          style={{
            ...helpStyles.infoBox,
            marginTop: "15px",
            backgroundColor: darkMode
              ? "#292929"
              : "#f7f7f7",
            color: darkMode
              ? "#cccccc"
              : "#555555",
          }}
        >
          Kiswahili support is being expanded across
          NexaStore. Some sections may still appear in
          English.
        </div>
      )}
    </HelpSubPage>
  );
}
// ---------------------------------------------------
// COUNTRY
// ---------------------------------------------------

if (helpView === "country") {
  return (
    <HelpSubPage
      icon="🌍"
      title="Country"
      darkMode={darkMode}
      onBack={() => setHelpView(null)}
    >
      <p style={helpStyles.description}>
        Choose the country where you use NexaStore.
        This helps us provide the right shopping,
        delivery and payment experience.
      </p>

      <div
        style={{
          ...helpStyles.selectionCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#f8f8f8",
        }}
      >
        <CountryOption
          flag="🇰🇪"
          name="Kenya"
          selected={country === "Kenya"}
          darkMode={darkMode}
          onClick={() => setCountry("Kenya")}
        />

        <CountryOption
          flag="🇺🇬"
          name="Uganda"
          selected={country === "Uganda"}
          darkMode={darkMode}
          onClick={() => setCountry("Uganda")}
        />

        <CountryOption
          flag="🇹🇿"
          name="Tanzania"
          selected={country === "Tanzania"}
          darkMode={darkMode}
          onClick={() => setCountry("Tanzania")}
        />

        <CountryOption
          flag="🇷🇼"
          name="Rwanda"
          selected={country === "Rwanda"}
          darkMode={darkMode}
          onClick={() => setCountry("Rwanda")}
        />
      </div>

      <div
        style={{
          ...helpStyles.selectedNotice,
          color: darkMode
            ? "#aaaaaa"
            : "#777777",
        }}
      >
        Current country:{" "}
        <strong
          style={{
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {country}
        </strong>
      </div>
    </HelpSubPage>
  );
}
// ---------------------------------------------------
// LANGUAGE
// ---------------------------------------------------

if (helpView === "language") {
  return (
    <HelpSubPage
      icon="🗣️"
      title="Language"
      darkMode={darkMode}
      onBack={() => setHelpView(null)}
    >
      <p style={helpStyles.description}>
        Choose the language you would like to use
        throughout NexaStore.
      </p>

      <div
        style={{
          ...helpStyles.selectionCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#f8f8f8",
        }}
      >
        <LanguageOption
          name="English"
          selected={language === "English"}
          darkMode={darkMode}
          onClick={() => setLanguage("English")}
        />

        <LanguageOption
          name="Kiswahili"
          selected={language === "Kiswahili"}
          darkMode={darkMode}
          onClick={() => setLanguage("Kiswahili")}
        />
      </div>

      <div
        style={{
          ...helpStyles.selectedNotice,
          color: darkMode
            ? "#aaaaaa"
            : "#777777",
        }}
      >
        Current language:{" "}
        <strong
          style={{
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {language}
        </strong>
      </div>

      {language === "Kiswahili" && (
        <div
          style={{
            ...helpStyles.infoBox,
            marginTop: "15px",
            backgroundColor: darkMode
              ? "#292929"
              : "#f7f7f7",
            color: darkMode
              ? "#cccccc"
              : "#555555",
          }}
        >
          Kiswahili support is being expanded across
          NexaStore. Some sections may still appear in
          English.
        </div>
      )}
    </HelpSubPage>
  );
}
  // ---------------------------------------------------
  // MAIN HELP MENU
  // ---------------------------------------------------

  return (
    <div>
      <div style={helpStyles.header}>
        <div style={helpStyles.headerIcon}>
          ❓
        </div>

        <h2
          style={{
            ...helpStyles.title,
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          Help & Support
        </h2>

        <p
          style={{
            ...helpStyles.subtitle,
            color: darkMode
              ? "#aaaaaa"
              : "#777777",
          }}
        >
          How can we help you?
        </p>
      </div>

      {/* -----------------------------------------------
          INFORMATION
      ------------------------------------------------ */}

      <div
        style={{
          ...helpStyles.groupTitle,
          color: darkMode
            ? "#aaaaaa"
            : "#666666",
        }}
      >
        NEXASTORE
      </div>

      <div
        style={{
          ...helpStyles.menuCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#ffffff",
        }}
      >
        <HelpMenuRow
          icon="ℹ️"
          title="About NexaStore"
          subtitle="Learn more about NexaStore"
          darkMode={darkMode}
          onClick={() => setHelpView("about")}
        />

        <HelpMenuRow
          icon="🛍️"
          title="NexaStore Services"
          subtitle="Explore what NexaStore offers"
          darkMode={darkMode}
          onClick={() => setHelpView("services")}
        />

        <HelpMenuRow
          icon="❓"
          title="Help Centre"
          subtitle="Find answers to common questions"
          darkMode={darkMode}
          onClick={() => setHelpView("centre")}
        />
        <HelpMenuRow
  icon="📚"
  title="FAQ"
  subtitle="Frequently asked questions"
  darkMode={darkMode}
  onClick={() => setHelpView("faq")}
/>

      </div>

      {/* -----------------------------------------------
          SUPPORT
      ------------------------------------------------ */}

      <div
        style={{
          ...helpStyles.groupTitle,
          color: darkMode
            ? "#aaaaaa"
            : "#666666",
        }}
      >
        SUPPORT
      </div>

      <div
        style={{
          ...helpStyles.menuCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#ffffff",
        }}
      >
        <HelpMenuRow
          icon="💬"
          title="Contact Support"
          subtitle="Chat with the NexaStore team"
          darkMode={darkMode}
          onClick={() => setHelpView("contact")}
        />

        <HelpMenuRow
          icon="⚠️"
          title="Report a Problem"
          subtitle="Tell us about an issue"
          darkMode={darkMode}
          onClick={() => setHelpView("problem")}
        />
      </div>

      {/* -----------------------------------------------
          SETTINGS
      ------------------------------------------------ */}

      <div
        style={{
          ...helpStyles.groupTitle,
          color: darkMode
            ? "#aaaaaa"
            : "#666666",
        }}
      >
        SETTINGS
      </div>

      <div
        style={{
          ...helpStyles.menuCard,
          backgroundColor: darkMode
            ? "#292929"
            : "#ffffff",
        }}
      >
        <HelpMenuRow
  icon="🌍"
  title="Country"
  subtitle={country}
  darkMode={darkMode}
  onClick={() => setHelpView("country")}
/>

<HelpMenuRow
  icon="🗣️"
  title="Language"
  subtitle={language}
  darkMode={darkMode}
  onClick={() => setHelpView("language")}
/>


        <HelpMenuRow
          icon="📱"
          title="App Version"
          subtitle="NexaStore v1.0.0"
          darkMode={darkMode}
          hideArrow
        />
      </div>

      <div
        style={{
          ...helpStyles.footer,
          color: darkMode
            ? "#777777"
            : "#999999",
        }}
      >
        NexaStore • Making shopping easier
      </div>

      <button
        style={helpStyles.closeHelpButton}
        onClick={closePanel}
      >
        Close
      </button>
    </div>
  );
}
// =====================================================
// HELP MENU ROW
// =====================================================

function HelpMenuRow({
  icon,
  title,
  subtitle,
  darkMode,
  onClick,
  hideArrow = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...helpStyles.menuRow,
        borderBottomColor: darkMode
          ? "#3a3a3a"
          : "#eeeeee",
      }}
    >
      <span style={helpStyles.menuIcon}>
        {icon}
      </span>

      <span style={helpStyles.menuContent}>
        <span
          style={{
            ...helpStyles.menuTitle,
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {title}
        </span>

        {subtitle && (
          <span
            style={{
              ...helpStyles.menuSubtitle,
              color: darkMode
                ? "#999999"
                : "#888888",
            }}
          >
            {subtitle}
          </span>
        )}
      </span>

      {!hideArrow && (
        <span
          style={{
            ...helpStyles.menuArrow,
            color: darkMode
              ? "#888888"
              : "#999999",
          }}
        >
          ›
        </span>
      )}
    </button>
  );
}


// =====================================================
// HELP SUB PAGE
// =====================================================

function HelpSubPage({
  icon,
  title,
  darkMode,
  onBack,
  children,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        style={{
          ...helpStyles.backButton,
          color: darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        ‹ Back
      </button>

      <div style={helpStyles.subHeader}>
        <div style={helpStyles.subIcon}>
          {icon}
        </div>

        <h2
          style={{
            ...helpStyles.title,
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {title}
        </h2>
      </div>

      <div style={helpStyles.subContent}>
        {children}
      </div>
    </div>
  );
}


// =====================================================
// HELP INFO BOX
// =====================================================

function HelpInfoBox({
  children,
  darkMode,
}) {
  return (
    <div
      style={{
        ...helpStyles.infoBox,
        backgroundColor: darkMode
          ? "#292929"
          : "#f7f7f7",
        color: darkMode
          ? "#cccccc"
          : "#555555",
      }}
    >
      {children}
    </div>
  );
}


// =====================================================
// HELP OPTION INFO
// =====================================================

function HelpOptionInfo({
  icon,
  title,
  text,
  darkMode,
}) {
  return (
    <div
      style={{
        ...helpStyles.infoItem,
        borderBottomColor: darkMode
          ? "#333333"
          : "#eeeeee",
      }}
    >
      <span style={helpStyles.infoIcon}>
        {icon}
      </span>

      <div>
        <div
          style={{
            ...helpStyles.infoTitle,
            color: darkMode
              ? "#ffffff"
              : "#333333",
          }}
        >
          {title}
        </div>

        <div
          style={{
            ...helpStyles.infoText,
            color: darkMode
              ? "#999999"
              : "#777777",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
// =====================================================
// FAQ ITEM
// =====================================================

function FaqItem({
  question,
  answer,
  darkMode,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        ...helpStyles.faqItem,
        borderBottomColor: darkMode
          ? "#333333"
          : "#eeeeee",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          ...helpStyles.faqQuestion,
          color: darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        <span>{question}</span>

        <span style={helpStyles.faqArrow}>
          {open ? "⌃" : "⌄"}
        </span>
      </button>

      {open && (
        <div
          style={{
            ...helpStyles.faqAnswer,
            color: darkMode
              ? "#aaaaaa"
              : "#777777",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

// =====================================================
// COUNTRY OPTION
// =====================================================

function CountryOption({
  flag,
  name,
  selected,
  darkMode,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...helpStyles.selectionRow,
        borderBottomColor: darkMode
          ? "#3a3a3a"
          : "#eeeeee",
      }}
    >
      <span style={helpStyles.selectionFlag}>
        {flag}
      </span>

      <span
        style={{
          ...helpStyles.selectionName,
          color: darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        {name}
      </span>

      <span
        style={{
          ...helpStyles.checkCircle,
          backgroundColor: selected
            ? "#2563EB"
            : "transparent",
          borderColor: selected
            ? "#2563EB"
            : "#cccccc",
        }}
      >
        {selected && "✓"}
      </span>
    </button>
  );
}


// =====================================================
// LANGUAGE OPTION
// =====================================================

function LanguageOption({
  name,
  selected,
  darkMode,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...helpStyles.selectionRow,
        borderBottomColor: darkMode
          ? "#3a3a3a"
          : "#eeeeee",
      }}
    >
      <span style={helpStyles.languageIcon}>
        A
      </span>

      <span
        style={{
          ...helpStyles.selectionName,
          color: darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        {name}
      </span>

      <span
        style={{
          ...helpStyles.checkCircle,
          backgroundColor: selected
            ? "#2563EB"
            : "transparent",
          borderColor: selected
            ? "#2563EB"
            : "#cccccc",
        }}
      >
        {selected && "✓"}
      </span>
    </button>
  );
}

// =====================================================
// WHATSAPP SUPPORT
// =====================================================

function openWhatsAppSupport() {
  const phoneNumber = "254794846360";

  const message = encodeURIComponent(
    "Hello NexaStore Support, I need help with my account."
  );

  window.open(
    `https://wa.me/${phoneNumber}?text=${message}`,
    "_blank"
  );
}

// =====================================================
// ACCOUNT SECTION
// =====================================================

function AccountSection({
  title,
  children,
  darkMode,
}) {
  return (
    <section style={styles.section}>
      <h2
        style={{
          ...styles.sectionTitle,
          color: darkMode
            ? "#bbbbbb"
            : "#555555",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          ...styles.sectionCard,
          backgroundColor: darkMode
            ? "#1c1c1c"
            : "#ffffff",
        }}
      >
        {children}
      </div>
    </section>
  );
}

// =====================================================
// ACCOUNT ROW
// =====================================================

function SimpleAccountRow({
  icon,
  title,
  darkMode,
  onClick,
  toggle = false,
  enabled = false,
  danger = false,
  hideArrow = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...styles.accountRow,
        borderBottomColor: darkMode
          ? "#303030"
          : "#eeeeee",
      }}
    >
      <span
        style={{
          ...styles.rowIcon,
          color: danger
            ? "#e53935"
            : darkMode
            ? "#dddddd"
            : "#555555",
        }}
      >
        {icon}
      </span>

      <span
        style={{
          ...styles.rowTitle,
          color: danger
            ? "#e53935"
            : darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        {title}
      </span>

      {toggle ? (
        <span
          style={{
            ...styles.toggle,
            backgroundColor: enabled
              ? "#f68b1e"
              : "#cccccc",
          }}
        >
          <span
            style={{
              ...styles.toggleCircle,
              transform: enabled
                ? "translateX(19px)"
                : "translateX(0)",
            }}
          />
        </span>
      ) : (
        !hideArrow && (
          <span
            style={{
              ...styles.arrow,
              color: darkMode
                ? "#999999"
                : "#888888",
            }}
          >
            ›
          </span>
        )
      )}
    </button>
  );
}

// =====================================================
// EMPTY SEARCH
// =====================================================

function EmptySearch({ darkMode }) {
  return (
    <div
      style={{
        padding: "25px",
        textAlign: "center",
        color: darkMode
          ? "#999999"
          : "#777777",
        fontSize: "13px",
      }}
    >
      No account options found.
    </div>
  );
}

// =====================================================
// MODAL PANEL
// =====================================================

function Panel({
  icon,
  title,
  text,
  button,
  onClick,
  darkMode,
}) {
  return (
    <>
      <div style={styles.modalIcon}>
        {icon}
      </div>

      <h2
        style={{
          ...styles.modalTitle,
          color: darkMode
            ? "#ffffff"
            : "#333333",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          ...styles.modalText,
          color: darkMode
            ? "#aaaaaa"
            : "#777777",
        }}
      >
        {text}
      </p>

      <button
        style={styles.modalButton}
        onClick={onClick}
      >
        {button}
      </button>
    </>
  );
}

// =====================================================
// STYLES
// =====================================================

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    fontFamily:
      "Arial, Helvetica, sans-serif",
    paddingBottom: "80px",
  },

  content: {
    width: "100%",
    maxWidth: "720px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  // SEARCH

  searchContainer: {
    height: "48px",
    margin: "0 0 8px",
    padding: "0 14px",
    display: "flex",
    alignItems: "center",
    borderRadius: "24px",
    boxSizing: "border-box",
  },

  searchIcon: {
    fontSize: "25px",
    lineHeight: 1,
    marginRight: "8px",
    transform: "rotate(-20deg)",
  },

  searchInput: {
    flex: 1,
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
  },

  clearSearch: {
    border: "none",
    background: "transparent",
    fontSize: "22px",
    color: "#777777",
    cursor: "pointer",
  },

  // WELCOME

  welcomeSection: {
    padding: "15px 16px",
    minHeight: "78px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },

  welcomeLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
  },

  profileImage: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  profileFallback: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "700",
    flexShrink: 0,
  },

  welcomeText: {
    minWidth: 0,
  },

  welcomeTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: 1.3,
  },

  email: {
    margin: "4px 0 0",
    fontSize: "11px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  // BALANCE

  balanceRow: {
    minHeight: "58px",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #eeeeee",
    boxSizing: "border-box",
  },

  balanceLeft: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },

  balanceIcon: {
    width: "27px",
    height: "27px",
    borderRadius: "4px",
    backgroundColor: "#2563EB",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
  },

  balanceText: {
    fontSize: "12px",
    fontWeight: "600",
  },

  balanceAmount: {
    marginTop: "2px",
    color:"#2563EB",
    fontSize: "12px",
    fontWeight: "700",
  },

  addMoneyButton: {
    border: "none",
    borderRadius: "5px",
    padding: "9px 13px",
    backgroundColor:"#2563EB",
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: "700",
    cursor: "pointer",
  },

  // SUPPORT

  supportButtons: {
    display: "flex",
    gap: "7px",
    padding: "9px 5px",
    boxSizing: "border-box",
  },

  liveChatButton: {
    flex: 1,
    height: "36px",
    border: "none",
    borderRadius: "4px",
    backgroundColor:"#2563EB",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },

  whatsappButton: {
    flex: 1,
    height: "36px",
    border: "1px solid #25d366",
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    color: "#25b95b",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },

  supportIcon: {
    marginRight: "7px",
  },

  whatsappIcon: {
    marginRight: "7px",
  },

  // SECTIONS

  section: {
    marginTop: "8px",
  },

  sectionTitle: {
    margin: 0,
    padding: "8px 8px 6px",
    fontSize: "11px",
    fontWeight: "700",
  },

  sectionCard: {
    width: "100%",
    boxSizing: "border-box",
  },

  // ROW

  accountRow: {
    width: "100%",
    minHeight: "52px",
    display: "flex",
    alignItems: "center",
    padding: "8px 13px",
    border: "none",
    borderBottom: "1px solid",
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  rowIcon: {
    width: "27px",
    minWidth: "27px",
    textAlign: "center",
    fontSize: "19px",
    marginRight: "11px",
  },

  rowTitle: {
    flex: 1,
    fontSize: "13px",
    fontWeight: "400",
  },

  arrow: {
    fontSize: "23px",
    lineHeight: 1,
    marginLeft: "8px",
  },

  // TOGGLE

  toggle: {
    width: "40px",
    height: "22px",
    padding: "2px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },

  toggleCircle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.25)",
    transition:
      "transform 0.2s ease",
  },

  // FOOTER

  footerSpace: {
    height: "20px",
  },

  // MODAL

  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor:
      "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 9999,
  },

 modal: {
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  maxHeight: "90vh",
  overflowY: "auto",
  padding: "35px 24px 24px",
  borderRadius: "10px",
  textAlign: "center",
  boxSizing: "border-box",
  boxShadow: "0 15px 50px rgba(0,0,0,0.25)",
},

  closeButton: {
    position: "absolute",
    top: "8px",
    right: "10px",
    width: "32px",
    height: "32px",
    border: "none",
    backgroundColor: "#eeeeee",
    borderRadius: "50%",
    fontSize: "21px",
    color: "#555555",
    cursor: "pointer",
  },

  modalIcon: {
    fontSize: "42px",
    marginBottom: "8px",
  },

  modalTitle: {
    margin: "0 0 10px",
    fontSize: "20px",
  },

  modalText: {
    margin: "0 0 20px",
    fontSize: "13px",
    lineHeight: 1.6,
  },

  modalButton: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f68b1e",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  },

  // LOGIN

  loginPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  },

  loginCard: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "35px 25px",
    textAlign: "center",
    boxSizing: "border-box",
    boxShadow:
      "0 5px 20px rgba(0,0,0,0.08)",
  },

  loginIcon: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  loginTitle: {
    margin: "0 0 8px",
    color: "#333333",
    fontSize: "21px",
  },

  loginText: {
    color: "#777777",
    fontSize: "14px",
    marginBottom: "20px",
  },

  loginButton: {
    width: "100%",
    border: "none",
    borderRadius: "5px",
    padding: "13px",
    backgroundColor: "#f68b1e",
    color: "#ffffff",
    fontWeight: "700",
    cursor: "pointer",
  },
};
// =====================================================
// HELP & SUPPORT STYLES
// =====================================================

const helpStyles = {
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },

  headerIcon: {
    width: "52px",
    height: "52px",
    margin: "0 auto 10px",
    borderRadius: "50%",
    backgroundColor: "#2563EB",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },

  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
  },

  subtitle: {
    margin: "6px 0 0",
    fontSize: "13px",
  },

  groupTitle: {
    marginTop: "17px",
    marginBottom: "7px",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },

  menuCard: {
    width: "100%",
    borderRadius: "7px",
    overflow: "hidden",
  },

  menuRow: {
    width: "100%",
    minHeight: "62px",
    display: "flex",
    alignItems: "center",
    padding: "9px 12px",
    border: "none",
    borderBottom: "1px solid",
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  menuIcon: {
    width: "34px",
    minWidth: "34px",
    fontSize: "20px",
    textAlign: "center",
    marginRight: "10px",
  },

  menuContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  menuTitle: {
    fontSize: "13px",
    fontWeight: "600",
  },

  menuSubtitle: {
    marginTop: "3px",
    fontSize: "10px",
  },

  menuArrow: {
    fontSize: "22px",
    marginLeft: "8px",
  },
  
  /* ================================================
     COUNTRY & LANGUAGE
  ================================================= */

    selectionCard: {
    width: "100%",
    borderRadius: "7px",
    overflow: "hidden",
  },

  selectionRow: {
    width: "100%",
    minHeight: "58px",
    display: "flex",
    alignItems: "center",
    padding: "10px 13px",
    border: "none",
    borderBottom: "1px solid",
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  selectionFlag: {
    width: "35px",
    fontSize: "22px",
  },

  languageIcon: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#2563EB",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
  },

  selectionName: {
    flex: 1,
    marginLeft: "10px",
    fontSize: "13px",
    fontWeight: "500",
  },

  checkCircle: {
    width: "21px",
    height: "21px",
    borderRadius: "50%",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "700",
    boxSizing: "border-box",
  },

  selectedNotice: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "11px",
  },

  backButton: {
    border: "none",
    backgroundColor: "transparent",
    padding: "0",
    marginBottom: "15px",
    fontSize: "13px",
    cursor: "pointer",
  },

  subHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },

  subIcon: {
    fontSize: "38px",
    marginBottom: "7px",
  },

  subContent: {
    textAlign: "left",
  },

  description: {
    margin: "0 0 18px",
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#777777",
  },

  infoBox: {
    padding: "15px",
    borderRadius: "7px",
    fontSize: "12px",
    lineHeight: 1.6,
  },

  infoItem: {
    display: "flex",
    gap: "11px",
    padding: "13px 0",
    borderBottom: "1px solid",
  },

  infoIcon: {
    width: "30px",
    minWidth: "30px",
    textAlign: "center",
    fontSize: "20px",
  },

  infoTitle: {
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "3px",
  },

  infoText: {
    fontSize: "11px",
    lineHeight: 1.5,
  },

  primaryButton: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2563EB",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  },

  secondaryButton: {
    width: "100%",
    padding: "12px",
    marginTop: "9px",
    border: "1px solid",
    borderRadius: "5px",
    backgroundColor: "transparent",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  },

  textarea: {
    width: "100%",
    minHeight: "110px",
    resize: "vertical",
    padding: "12px",
    border: "1px solid #dddddd",
    borderRadius: "6px",
    outline: "none",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    boxSizing: "border-box",
  },

  footer: {
    textAlign: "center",
    fontSize: "10px",
    marginTop: "20px",
  },

  closeHelpButton: {
    width: "100%",
    padding: "11px",
    marginTop: "18px",
    border: "1px solid #dddddd",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "#777777",
    fontSize: "12px",
    cursor: "pointer",
  },
    chatBox: {
    width: "100%",
    minHeight: "180px",
    padding: "15px",
    borderRadius: "7px",
    boxSizing: "border-box",
    marginBottom: "12px",
  },

  chatMessage: {
    maxWidth: "85%",
    padding: "11px 13px",
    borderRadius: "8px",
    fontSize: "12px",
    lineHeight: 1.5,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
    faqItem: {
    borderBottom: "1px solid",
  },

  faqQuestion: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "15px 4px",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },

  faqArrow: {
    fontSize: "18px",
    color: "#888888",
    flexShrink: 0,
  },

  faqAnswer: {
    padding: "0 4px 15px",
    fontSize: "12px",
    lineHeight: 1.6,
  },
};
