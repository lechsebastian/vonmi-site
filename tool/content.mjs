// Page content for vonmi.app. Edit here, then run: node tool/build.mjs
// Every legal change: update UPDATED and keep EN and PL in sync.

export const OWNER = 'Sebastian Lech';
export const EMAIL = 'support@vonmi.app';
export const UPDATED = { en: '24 November 2026', pl: '24 listopada 2026' };

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

// Contact on the site goes through these profiles (no email outside support and legal pages).
export const SOCIAL = [
  { type: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/sebastianlech/' },
  { type: 'instagram', name: 'Instagram', url: 'https://instagram.com/mobile.design.developer' },
];

export const T = {
  en: {
    langName: 'English',
    otherLang: 'Polski',
    updated: 'Last updated',
    footer: `© 2026 ${OWNER}`,
    homeDescription: 'Independent mobile developer building my own iOS and Android apps, and available to build yours.',
    heroSr: 'I design, build, ship and grow mobile apps.',
    heroHtml: 'I <span class="rot" data-words="design|build|ship|grow">design</span> mobile apps.',
    homeLead: 'I make my own iOS and Android apps, and I can build yours too.',
    seeApps: 'See my apps',
    workWithMe: 'Work with me',
    navApps: 'Apps',
    navWork: 'Work with me',
    appsLabel: '// portfolio',
    apps: 'My apps',
    workLabel: '// work with me',
    workTitle: 'An app built for you',
    workText:
      'Have an idea for an app? I can take it from the first sketch through code to release in the App Store and Google Play.',
    contactLabel: '// contact',
    contactTitle: 'Let’s talk about your app.',
    contactText: 'Message me on LinkedIn or Instagram.',
    more: 'More',
    back: 'All apps',
    available: 'available in stores',
    soon: 'coming soon',
    features: 'Features',
    linksBio: 'I build mobile apps for iOS and Android',
    linksApps: '// my apps',
    linksContact: '// contact',
    supportHint: 'Help with the apps',
    fullSite: 'Full website',
    services: [
      'iOS and Android apps in Flutter',
      'Interface design',
      'Accounts, sync and backend with Firebase',
      'Release in the App Store and Google Play',
      'Subscriptions and in-app purchases',
      'AI-powered features',
    ],
    comingSoonStores: 'Coming soon to the App Store and Google Play.',
    appStore: 'Download on the App Store',
    googlePlay: 'Get it on Google Play',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    deleteAccount: 'Delete your account',
    support: 'Support',
    supportText: `Questions, problems or feedback: ${mail}`,
  },
  pl: {
    langName: 'Polski',
    otherLang: 'English',
    updated: 'Ostatnia aktualizacja',
    footer: `© 2026 ${OWNER}`,
    homeDescription: 'Niezależny twórca aplikacji mobilnych: tworzę własne aplikacje na iOS i Androida i buduję je na zlecenie.',
    heroSr: 'Projektuję, buduję, wydaję i rozwijam aplikacje mobilne.',
    heroHtml: '<span class="rot" data-words="Projektuję|Buduję|Wydaję|Rozwijam">Projektuję</span> aplikacje mobilne.',
    homeLead: 'Tworzę własne aplikacje na iOS i Androida. Mogę zbudować też Twoją.',
    seeApps: 'Zobacz aplikacje',
    workWithMe: 'Współpraca',
    navApps: 'Aplikacje',
    navWork: 'Współpraca',
    appsLabel: '// portfolio',
    apps: 'Moje aplikacje',
    workLabel: '// współpraca',
    workTitle: 'Aplikacja na zlecenie',
    workText:
      'Masz pomysł na aplikację? Przeprowadzę ją od pierwszego szkicu, przez kod, aż po publikację w App Store i Google Play.',
    contactLabel: '// kontakt',
    contactTitle: 'Porozmawiajmy o Twojej aplikacji.',
    contactText: 'Napisz do mnie przez LinkedIn lub Instagram.',
    more: 'Więcej',
    back: 'Wszystkie aplikacje',
    available: 'dostępna w sklepach',
    soon: 'wkrótce',
    features: 'Funkcje',
    linksBio: 'Tworzę aplikacje mobilne na iOS i Androida',
    linksApps: '// moje aplikacje',
    linksContact: '// kontakt',
    supportHint: 'Pomoc w sprawie aplikacji',
    fullSite: 'Pełna strona',
    services: [
      'Aplikacje na iOS i Androida we Flutterze',
      'Projekt interfejsu',
      'Konta, synchronizacja i backend w Firebase',
      'Publikacja w App Store i Google Play',
      'Subskrypcje i zakupy w aplikacji',
      'Funkcje oparte na AI',
    ],
    comingSoonStores: 'Wkrótce w App Store i Google Play.',
    appStore: 'Pobierz z App Store',
    googlePlay: 'Pobierz z Google Play',
    privacy: 'Polityka prywatności',
    terms: 'Regulamin',
    deleteAccount: 'Usuwanie konta',
    support: 'Pomoc',
    supportText: `Pytania, problemy lub uwagi: ${mail}`,
  },
};

// ---------------------------------------------------------------- apps
// Each app gets a card on the home page and a page at /<slug>/.
// Its legal pages are defined in LEGAL at the bottom of this file.

export const APPS = [
  {
    slug: 'seansownik',
    name: { en: 'Seenit', pl: 'Seansownik' },
    icon: 'assets/apps/seansownik.png',
    stores: {
      appStore: 'https://apps.apple.com/app/id6824915682',
      googlePlay: 'https://play.google.com/store/apps/details?id=app.vonmi.seansownik',
    },
    tag: {
      en: 'Track TV shows, movies and premieres.',
      pl: 'Śledź seriale, filmy i premiery.',
    },
    summary: {
      en: 'Track TV shows, movies and premieres. Library, episode progress, premiere calendar and stats.',
      pl: 'Śledź seriale, filmy i premiery. Biblioteka, postęp odcinków, kalendarz premier i statystyki.',
    },
    tech: ['Flutter', 'Firebase', 'TMDb API', 'iOS · Android'],
    // Phone screenshots: [front, back]; the home hero shows the first app that has them.
    screens: ['assets/apps/seansownik-library.jpg', 'assets/apps/seansownik-calendar.jpg'],
    intro: {
      en: 'Seenit (Polish name: Seansownik) is a simple way to remember what you have watched, what you are watching now and what you want to see next.',
      pl: 'Seansownik to prosty sposób, żeby zapamiętać, co już obejrzałeś, co oglądasz teraz i co chcesz zobaczyć.',
    },
    features: {
      en: [
        ['Movie and TV library', 'Add titles as Planned, Watching, Up to date, Completed or Dropped.'],
        ['Episode progress', 'Tick off episodes one by one or a whole season at once and see what is next.'],
        ['Premiere calendar', 'Upcoming episodes and releases from your library, with optional reminders.'],
        ['Ratings and stats', 'Rate from 0 to 10, see your watch time, favourite genres and your year in numbers.'],
        ['Where to watch', 'Check which streaming services offer a title in your country.'],
        ['In sync and private', 'Syncs across your devices, works offline, no ads.'],
      ],
      pl: [
        ['Biblioteka filmów i seriali', 'Dodawaj tytuły jako Planowane, W trakcie, Na bieżąco, Ukończone albo Porzucone.'],
        ['Postęp w serialach', 'Zaznaczaj odcinki pojedynczo albo całymi sezonami i zobacz, co dalej.'],
        ['Kalendarz premier', 'Nadchodzące odcinki i premiery z Twojej biblioteki, z opcjonalnymi przypomnieniami.'],
        ['Oceny i statystyki', 'Oceniaj od 0 do 10, sprawdzaj czas oglądania, ulubione gatunki i swój rok w liczbach.'],
        ['Gdzie obejrzeć', 'Sprawdź, w których serwisach streamingowych tytuł jest dostępny w Twoim kraju.'],
        ['Zsynchronizowany i prywatny', 'Synchronizacja między urządzeniami, działa bez internetu, bez reklam.'],
      ],
    },
    note: {
      en: 'Movie and TV data is provided by The Movie Database (TMDb). This app uses the TMDb API but is not endorsed or certified by TMDb.',
      pl: 'Dane o filmach i serialach pochodzą z The Movie Database (TMDb). Aplikacja korzysta z API TMDb, ale nie jest przez TMDb popierana ani certyfikowana.',
    },
  },
  {
    slug: 'spendio',
    name: { en: 'Spendio', pl: 'Spendio' },
    icon: null, // inline SVG, see spendioIcon in build.mjs
    stores: null,
    tag: {
      en: 'Expense tracking that is simple on day one and detailed when you want it.',
      pl: 'Śledzenie wydatków: proste od pierwszego dnia, szczegółowe, kiedy tego potrzebujesz.',
    },
    summary: {
      en: 'Expense tracking that is simple on day one and detailed when you want it.',
      pl: 'Śledzenie wydatków: proste od pierwszego dnia, szczegółowe, kiedy tego potrzebujesz.',
    },
    tech: ['Flutter', 'Firebase', 'iOS · Android'],
    screens: null,
    intro: {
      en: 'Spendio helps you record expenses and income, set budgets and see where your money goes. Your data syncs between your iPhone, iPad and Android devices through your account.',
      pl: 'Spendio pomaga zapisywać wydatki i przychody, ustawiać budżety i sprawdzać, na co idą pieniądze. Dane synchronizują się między iPhone’em, iPadem i urządzeniami z Androidem dzięki Twojemu kontu.',
    },
    features: null,
    note: null,
  },
];

// ---------------------------------------------------------------- privacy

export const privacy = {
  en: `
<p class="lead">This policy explains what data the Spendio app processes, why, and what control you have over it. In short: your entries belong to you, they are stored in the European Union, nothing is sold or used for advertising, and you can delete everything at any time.</p>

<h2>1. Who is responsible</h2>
<p>The controller of your personal data is ${OWNER}, the developer of Spendio (publishing as “vonmi”). Contact: ${mail}.</p>

<h2>2. Data we process</h2>
<h3>Account data</h3>
<p>Spendio requires an account so your data can sync between your devices. You sign in with Apple (on iPhone and iPad) or with Google. We receive from the sign-in provider a unique user ID, your email address (with Apple this can be a private relay address if you choose “Hide My Email”) and, if you allow it, your name. We never see your Apple or Google password.</p>
<h3>What you enter in the app</h3>
<p>Expenses and income (amount, currency, category, date, note, tags), your categories, budgets, recurring entries and app settings such as your main currency. This is the data the app exists for. It is stored in your account and cached on your devices so the app also works offline.</p>
<h3>Crash reports</h3>
<p>If the app crashes, it sends a crash report: technical details of the error, device model, operating system version, app version and a random installation identifier. Crash reports do not contain your entries. Crash reporting is on by default and you can turn it off in the app settings.</p>
<h3>Usage statistics (only with your consent)</h3>
<p>If you agree, the app sends anonymous usage statistics, for example which screens are used, together with device type, operating system, country and a random app instance identifier. This helps us decide what to improve. Statistics are off until you agree, and you can withdraw consent in the settings at any time. Advertising identifiers are never collected and advertising features are disabled.</p>
<h3>What we do not do</h3>
<ul>
  <li>No ads, no selling or sharing of your data for marketing.</li>
  <li>No tracking across other apps or websites.</li>
  <li>No access to your bank accounts.</li>
  <li>Reminders are scheduled on your device; no push notification server is involved.</li>
</ul>

<h2>3. Why and on what legal basis</h2>
<div class="table"><table>
  <thead><tr><th>Purpose</th><th>Data</th><th>Legal basis (GDPR)</th></tr></thead>
  <tbody>
    <tr><td>Providing the app, your account and sync</td><td>Account data, your entries</td><td>Performance of a contract, Art. 6(1)(b)</td></tr>
    <tr><td>Finding and fixing crashes</td><td>Crash reports</td><td>Legitimate interest in a stable app, Art. 6(1)(f); you can object by turning it off</td></tr>
    <tr><td>Understanding how the app is used</td><td>Usage statistics</td><td>Your consent, Art. 6(1)(a)</td></tr>
    <tr><td>Answering your messages</td><td>Your email and message</td><td>Legitimate interest, Art. 6(1)(f)</td></tr>
  </tbody>
</table></div>

<h2>4. Where data is stored and who processes it</h2>
<p>Spendio uses Google Firebase (Google Ireland Limited) as its processor: Firebase Authentication for sign-in, Cloud Firestore for your data, Firebase Crashlytics for crash reports and Google Analytics for Firebase for usage statistics. Your entries are stored in Google’s European multi-region data centres (Belgium and the Netherlands). Google may process some technical data, such as crash reports and statistics, outside the EU; such transfers are covered by the EU–US Data Privacy Framework and the European Commission’s Standard Contractual Clauses.</p>
<p>Apple and Google act as independent sign-in providers under their own privacy policies.</p>

<h2>5. How long we keep data</h2>
<ul>
  <li>Account data and your entries: until you delete your account. Deletion removes them from our database immediately.</li>
  <li>Crash reports: up to 90 days.</li>
  <li>Usage statistics: up to 2 months.</li>
  <li>Emails to support: as long as needed to handle your request, at most 2 years.</li>
</ul>

<h2>6. Your rights</h2>
<p>You have the right to access your data, to correct it, to have it deleted, to restrict processing, to data portability, to object to processing based on legitimate interest, and to withdraw consent at any time without affecting earlier processing. To use these rights, write to ${mail}. You also have the right to lodge a complaint with a data protection authority, in Poland the President of the Personal Data Protection Office (UODO), or the authority in your country.</p>

<h2>7. Deleting your account</h2>
<p>You can delete your account and all your data in the app: Settings → Account → Delete account. You can also request deletion by email. Details: <a href="{{deleteUrl}}">Delete your account</a>.</p>

<h2>8. Children</h2>
<p>Spendio is not directed at children under 16 and we do not knowingly collect their data.</p>

<h2>9. Security</h2>
<p>Data is transmitted over encrypted connections. Database access rules ensure that only you, when signed in, can read and change your data.</p>

<h2>10. Changes to this policy</h2>
<p>If we change this policy, we will update the date at the top. If a change is significant, we will inform you in the app.</p>
`,
  pl: `
<p class="lead">Ta polityka wyjaśnia, jakie dane przetwarza aplikacja Spendio, w jakim celu i jaką masz nad nimi kontrolę. W skrócie: Twoje wpisy należą do Ciebie, są przechowywane w Unii Europejskiej, nic nie jest sprzedawane ani używane do reklam, a wszystko możesz w każdej chwili usunąć.</p>

<h2>1. Kto odpowiada za dane</h2>
<p>Administratorem Twoich danych osobowych jest ${OWNER}, twórca aplikacji Spendio (publikujący jako „vonmi”). Kontakt: ${mail}.</p>

<h2>2. Jakie dane przetwarzamy</h2>
<h3>Dane konta</h3>
<p>Spendio wymaga konta, żeby dane synchronizowały się między Twoimi urządzeniami. Logujesz się przez Apple (na iPhonie i iPadzie) albo przez Google. Od dostawcy logowania otrzymujemy unikalny identyfikator użytkownika, adres e-mail (w przypadku Apple może to być adres przekierowujący, jeśli wybierzesz „Ukryj mój e-mail”) oraz, jeśli na to pozwolisz, imię i nazwisko. Nigdy nie widzimy Twojego hasła do Apple ani Google.</p>
<h3>To, co wpisujesz w aplikacji</h3>
<p>Wydatki i przychody (kwota, waluta, kategoria, data, notatka, tagi), Twoje kategorie, budżety, wpisy cykliczne i ustawienia aplikacji, np. główna waluta. To dane, dla których aplikacja istnieje. Są przechowywane na Twoim koncie i zapisywane na urządzeniach, żeby aplikacja działała także bez internetu.</p>
<h3>Raporty awarii</h3>
<p>Jeśli aplikacja ulegnie awarii, wysyła raport: techniczne szczegóły błędu, model urządzenia, wersję systemu, wersję aplikacji i losowy identyfikator instalacji. Raporty awarii nie zawierają Twoich wpisów. Raportowanie awarii jest domyślnie włączone i możesz je wyłączyć w ustawieniach aplikacji.</p>
<h3>Statystyki użycia (tylko za Twoją zgodą)</h3>
<p>Jeśli się zgodzisz, aplikacja wysyła anonimowe statystyki użycia, np. które ekrany są używane, wraz z typem urządzenia, systemem, krajem i losowym identyfikatorem instancji aplikacji. Pomaga nam to zdecydować, co ulepszyć. Statystyki są wyłączone, dopóki się nie zgodzisz, a zgodę możesz w każdej chwili wycofać w ustawieniach. Identyfikatory reklamowe nigdy nie są zbierane, a funkcje reklamowe są wyłączone.</p>
<h3>Czego nie robimy</h3>
<ul>
  <li>Żadnych reklam, sprzedaży ani udostępniania danych w celach marketingowych.</li>
  <li>Żadnego śledzenia w innych aplikacjach ani na stronach internetowych.</li>
  <li>Żadnego dostępu do Twoich kont bankowych.</li>
  <li>Przypomnienia są planowane na Twoim urządzeniu, bez serwera powiadomień.</li>
</ul>

<h2>3. Cele i podstawy prawne</h2>
<div class="table"><table>
  <thead><tr><th>Cel</th><th>Dane</th><th>Podstawa prawna (RODO)</th></tr></thead>
  <tbody>
    <tr><td>Działanie aplikacji, konto i synchronizacja</td><td>Dane konta, Twoje wpisy</td><td>Wykonanie umowy, art. 6 ust. 1 lit. b</td></tr>
    <tr><td>Wykrywanie i naprawianie awarii</td><td>Raporty awarii</td><td>Prawnie uzasadniony interes w stabilnej aplikacji, art. 6 ust. 1 lit. f; możesz się sprzeciwić, wyłączając raporty</td></tr>
    <tr><td>Zrozumienie, jak aplikacja jest używana</td><td>Statystyki użycia</td><td>Twoja zgoda, art. 6 ust. 1 lit. a</td></tr>
    <tr><td>Odpowiadanie na wiadomości</td><td>Twój e-mail i wiadomość</td><td>Prawnie uzasadniony interes, art. 6 ust. 1 lit. f</td></tr>
  </tbody>
</table></div>

<h2>4. Gdzie są dane i kto je przetwarza</h2>
<p>Spendio korzysta z Google Firebase (Google Ireland Limited) jako podmiotu przetwarzającego: Firebase Authentication do logowania, Cloud Firestore do przechowywania danych, Firebase Crashlytics do raportów awarii i Google Analytics for Firebase do statystyk. Twoje wpisy są przechowywane w europejskich centrach danych Google (Belgia i Holandia). Google może przetwarzać część danych technicznych, np. raporty awarii i statystyki, poza UE; takie przekazanie jest objęte programem EU–US Data Privacy Framework oraz standardowymi klauzulami umownymi Komisji Europejskiej.</p>
<p>Apple i Google działają jako niezależni dostawcy logowania na podstawie własnych polityk prywatności.</p>

<h2>5. Jak długo przechowujemy dane</h2>
<ul>
  <li>Dane konta i Twoje wpisy: do czasu usunięcia konta. Usunięcie natychmiast kasuje je z naszej bazy.</li>
  <li>Raporty awarii: do 90 dni.</li>
  <li>Statystyki użycia: do 2 miesięcy.</li>
  <li>Wiadomości do pomocy: tak długo, jak to potrzebne do obsługi sprawy, najwyżej 2 lata.</li>
</ul>

<h2>6. Twoje prawa</h2>
<p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie oraz wycofania zgody w dowolnym momencie, bez wpływu na wcześniejsze przetwarzanie. Aby skorzystać z tych praw, napisz na ${mail}. Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO) lub organu nadzorczego w Twoim kraju.</p>

<h2>7. Usunięcie konta</h2>
<p>Konto i wszystkie dane możesz usunąć w aplikacji: Ustawienia → Konto → Usuń konto. Możesz też poprosić o usunięcie mailowo. Szczegóły: <a href="{{deleteUrl}}">Usuwanie konta</a>.</p>

<h2>8. Dzieci</h2>
<p>Spendio nie jest skierowane do dzieci poniżej 16 lat i świadomie nie zbieramy ich danych.</p>

<h2>9. Bezpieczeństwo</h2>
<p>Dane są przesyłane szyfrowanym połączeniem. Reguły dostępu do bazy danych gwarantują, że tylko Ty, po zalogowaniu, możesz odczytywać i zmieniać swoje dane.</p>

<h2>10. Zmiany polityki</h2>
<p>Jeśli zmienimy tę politykę, zaktualizujemy datę na górze strony. O istotnych zmianach poinformujemy w aplikacji.</p>
`,
};

// ---------------------------------------------------------------- terms

export const terms = {
  en: `
<p class="lead">These terms apply to the Spendio app. By using Spendio you accept them. They are written to be short and readable.</p>

<h2>1. The app</h2>
<p>Spendio is an app for recording expenses and income, managing categories and budgets and viewing summaries. It is made by ${OWNER}. If you have any questions, write to ${mail}.</p>

<h2>2. Your account</h2>
<p>You need an Apple or Google account to sign in. You are responsible for keeping access to that account secure. You can delete your Spendio account at any time in the app.</p>

<h2>3. Your data</h2>
<p>Everything you enter remains yours. We use it only to provide the app, as described in the <a href="{{privacyUrl}}">Privacy Policy</a>.</p>

<h2>4. Not financial advice</h2>
<p>Spendio shows the data you enter. Summaries, budgets and statistics are for information only and are not financial, tax or investment advice. Check important figures yourself.</p>

<h2>5. Acceptable use</h2>
<p>Do not try to access other users’ data, disrupt the service or reverse-engineer it beyond what the law allows.</p>

<h2>6. Paid features</h2>
<p>The basic app is free. If optional paid subscriptions are offered, they are bought and managed through the App Store or Google Play, under their terms. You can cancel in your store account settings; refunds are handled by the store.</p>

<h2>7. Availability and changes</h2>
<p>We work to keep Spendio reliable, but we cannot guarantee it will always be available or free of errors. We may change or discontinue features. If we ever shut down the service, we will tell you in advance so you can export your data.</p>

<h2>8. Liability</h2>
<p>To the extent permitted by law, we are not liable for indirect losses or for decisions you make based on data shown in the app. Nothing in these terms limits your statutory rights as a consumer.</p>

<h2>9. Changes to these terms</h2>
<p>We may update these terms. The date at the top shows the current version. Significant changes will be announced in the app.</p>

<h2>10. Law</h2>
<p>These terms are governed by Polish law. If you are a consumer, you also keep the protection of the mandatory laws of your country of residence.</p>
`,
  pl: `
<p class="lead">Ten regulamin dotyczy aplikacji Spendio. Korzystając ze Spendio, akceptujesz go. Staraliśmy się, żeby był krótki i zrozumiały.</p>

<h2>1. Aplikacja</h2>
<p>Spendio to aplikacja do zapisywania wydatków i przychodów, zarządzania kategoriami i budżetami oraz przeglądania podsumowań. Twórcą aplikacji jest ${OWNER}. Jeśli masz pytania, napisz na ${mail}.</p>

<h2>2. Twoje konto</h2>
<p>Do logowania potrzebujesz konta Apple lub Google. Odpowiadasz za bezpieczeństwo dostępu do tego konta. Konto Spendio możesz w każdej chwili usunąć w aplikacji.</p>

<h2>3. Twoje dane</h2>
<p>Wszystko, co wpisujesz, należy do Ciebie. Używamy tego wyłącznie do działania aplikacji, zgodnie z <a href="{{privacyUrl}}">polityką prywatności</a>.</p>

<h2>4. To nie jest doradztwo finansowe</h2>
<p>Spendio pokazuje dane, które wpisujesz. Podsumowania, budżety i statystyki mają charakter informacyjny i nie są poradą finansową, podatkową ani inwestycyjną. Ważne liczby sprawdzaj samodzielnie.</p>

<h2>5. Zasady korzystania</h2>
<p>Nie próbuj uzyskać dostępu do danych innych użytkowników, zakłócać działania usługi ani jej dekompilować w zakresie wykraczającym poza to, na co pozwala prawo.</p>

<h2>6. Płatne funkcje</h2>
<p>Podstawowa aplikacja jest bezpłatna. Jeśli pojawią się opcjonalne płatne subskrypcje, kupuje się je i zarządza nimi przez App Store lub Google Play, na ich warunkach. Subskrypcję anulujesz w ustawieniach konta w sklepie; zwrotami zajmuje się sklep.</p>

<h2>7. Dostępność i zmiany</h2>
<p>Dbamy o niezawodność Spendio, ale nie możemy zagwarantować, że aplikacja będzie zawsze dostępna i wolna od błędów. Możemy zmieniać lub wycofywać funkcje. Jeśli kiedyś zamkniemy usługę, uprzedzimy o tym z wyprzedzeniem, żebyś mógł wyeksportować dane.</p>

<h2>8. Odpowiedzialność</h2>
<p>W zakresie dozwolonym przez prawo nie odpowiadamy za szkody pośrednie ani za decyzje podjęte na podstawie danych widocznych w aplikacji. Regulamin nie ogranicza Twoich ustawowych praw konsumenta.</p>

<h2>9. Zmiany regulaminu</h2>
<p>Możemy aktualizować ten regulamin. Data na górze strony wskazuje obowiązującą wersję. O istotnych zmianach poinformujemy w aplikacji.</p>

<h2>10. Prawo właściwe</h2>
<p>Regulamin podlega prawu polskiemu. Jeśli jesteś konsumentem, zachowujesz też ochronę bezwzględnie obowiązujących przepisów kraju swojego zamieszkania.</p>
`,
};

// ---------------------------------------------------------------- delete account

export const deleteAccount = {
  en: `
<p class="lead">You can delete your Spendio account and all data connected to it at any time. Deletion is permanent and cannot be undone.</p>

<h2>Option 1: in the app (fastest)</h2>
<ol>
  <li>Open Spendio and sign in.</li>
  <li>Go to <strong>Settings → Account → Delete account</strong>.</li>
  <li>Confirm. If you signed in with Apple, you may be asked to confirm with Apple once more.</li>
</ol>
<p>Your account is deleted immediately and you are signed out on this device. Other devices are signed out the next time they connect.</p>

<h2>Option 2: by email</h2>
<p>If you no longer have the app, send an email to ${mail} from the email address of your account (for Apple “Hide My Email”, from the address it forwards to) with the subject <strong>Delete my Spendio account</strong>. We will delete the account within 30 days, usually much sooner, and confirm by email.</p>

<h2>What is deleted</h2>
<ul>
  <li>Your account and sign-in data.</li>
  <li>All expenses, income, categories, budgets, recurring entries and settings.</li>
  <li>The link between Spendio and your Apple sign-in is revoked.</li>
</ul>

<h2>What is kept and for how long</h2>
<ul>
  <li>Crash reports, which do not contain your entries: deleted automatically after up to 90 days.</li>
  <li>Usage statistics, if you consented: deleted automatically after up to 2 months.</li>
  <li>Your emails with support: up to 2 years, then deleted.</li>
</ul>
<p>Uninstalling the app does not delete your account. Active subscriptions bought in the App Store or Google Play must be cancelled in your store account.</p>
`,
  pl: `
<p class="lead">Konto Spendio i wszystkie powiązane z nim dane możesz usunąć w dowolnym momencie. Usunięcie jest trwałe i nie da się go cofnąć.</p>

<h2>Sposób 1: w aplikacji (najszybciej)</h2>
<ol>
  <li>Otwórz Spendio i zaloguj się.</li>
  <li>Przejdź do <strong>Ustawienia → Konto → Usuń konto</strong>.</li>
  <li>Potwierdź. Jeśli logujesz się przez Apple, Apple może poprosić o ponowne potwierdzenie.</li>
</ol>
<p>Konto zostanie usunięte od razu, a Ty wylogowany na tym urządzeniu. Inne urządzenia wylogują się przy najbliższym połączeniu.</p>

<h2>Sposób 2: mailowo</h2>
<p>Jeśli nie masz już aplikacji, wyślij wiadomość na ${mail} z adresu e-mail przypisanego do konta (przy „Ukryj mój e-mail” w Apple z adresu, na który przychodzą przekierowania) z tematem <strong>Usuń moje konto Spendio</strong>. Usuniemy konto w ciągu 30 dni, zwykle znacznie szybciej, i potwierdzimy to mailowo.</p>

<h2>Co zostanie usunięte</h2>
<ul>
  <li>Twoje konto i dane logowania.</li>
  <li>Wszystkie wydatki, przychody, kategorie, budżety, wpisy cykliczne i ustawienia.</li>
  <li>Powiązanie Spendio z logowaniem Apple zostanie unieważnione.</li>
</ul>

<h2>Co zostaje i jak długo</h2>
<ul>
  <li>Raporty awarii, które nie zawierają Twoich wpisów: usuwane automatycznie najpóźniej po 90 dniach.</li>
  <li>Statystyki użycia, jeśli wyraziłeś zgodę: usuwane automatycznie najpóźniej po 2 miesiącach.</li>
  <li>Twoja korespondencja z pomocą: do 2 lat, potem jest usuwana.</li>
</ul>
<p>Odinstalowanie aplikacji nie usuwa konta. Aktywne subskrypcje kupione w App Store lub Google Play trzeba anulować w ustawieniach konta w sklepie.</p>
`,
};

// ---------------------------------------------------------------- seansownik: privacy

const seansownikPrivacy = {
  en: `
<h2>1. Data controller</h2>
<p>The controller of personal data collected in the Seenit app (Polish name: Seansownik) is ${OWNER}, contact: ${mail}.</p>

<h2>2. What data we collect</h2>
<p>Seenit requires an account so that it can save your movie and TV show library and sync it across your devices. For this purpose we process:</p>
<ul>
  <li><strong>Account data</strong> — when you sign up with email: your email address and password (we never receive your password in plain text — it is handled directly by Google’s Firebase Authentication). When you sign in with Google: the email address, name and profile picture shared by your Google account. When you sign in with Apple (iPhone, iPad): the email address shared by Apple — if you choose “Hide My Email”, this is a random relay address from Apple, not your real one.</li>
  <li><strong>Username</strong> — every account has a unique username. By default we create it from the part of your email address before the “@” sign (never the whole address) and you can change it in Settings, at most once every 3 days. We also store the date of your last username change. Currently only you can see your username; if features are added in the future where it becomes visible to others, we will tell you in advance.</li>
  <li><strong>Library data</strong> — the movies/TV shows you add to your library, the status you assign (Planned/Watching/Up to date/Completed/Dropped), ratings, your watch progress (watched seasons/episodes together with the dates you watched them, which we use for your statistics, such as your year in review) and whether you muted notifications for a title.</li>
  <li><strong>Basic account usage data</strong> — with your account we store the date it was created, the day you last used the app (the date only, without the time), the platform (Android, iOS or browser), the app language and the app version. We also store the days on which you used the app (dates only, without the time) and, in the Android and iOS apps, a list of devices used with your account: a random app installation identifier (not a phone identifier or an advertising identifier; reinstalling the app creates a new one), the platform, the app version, the date the device was added and the day it was last used. A device entry is deleted when you sign out on that device. This data is used solely for aggregate statistics, such as the number of active accounts per day and the number of devices with the app. We do not record which screens you open or what you tap.</li>
  <li><strong>Feedback</strong> — if you send a message through the “Feedback” form, we store its type (bug, idea, other), content, date and status, together with the app version, platform, language and the app screen you chose the message is about. The message is linked to your account so you can see its status. We keep it until you delete your account.</li>
  <li><strong>Crash reports (Android and iOS app only)</strong> — when an error occurs in the app, a technical report is sent: where in the code the error happened, device model, OS and app version, memory state and a random installation identifier. The report does not include your email address, account data or library. Reports are handled by Firebase Crashlytics and kept for about 90 days. You can turn them off at any time in the app’s Settings (“Send crash reports”).</li>
  <li><strong>Technical data stored only locally on your device</strong> — a cache of search results and title details (so the app runs faster and works offline) and app settings (e.g. theme, language, notification settings). We do not collect this data or send it to any servers outside your device. Premiere notifications, if you turn them on, are scheduled locally on your device based on your library; no external notification service is involved.</li>
</ul>
<p>The app currently contains no ads and no third-party analytics or tracking tools, and does not collect behavioral data for marketing purposes. Crash reports are used solely to detect and fix bugs. From the data in the database we keep only our own aggregate statistics: the number of accounts, the number of active accounts, the split by platform and language, and the number of library entries by status.</p>

<h2>3. Purpose and legal basis of processing</h2>
<p>We process data to provide the service — to create and maintain your account and to save and sync your library across devices. The legal basis is that processing is necessary to perform the contract for providing an electronic service (Art. 6(1)(b) GDPR) and, when you sign in with Google or Apple, also your consent given by choosing that sign-in method (Art. 6(1)(a) GDPR). Crash reports are processed on the basis of our legitimate interest in keeping the app stable (Art. 6(1)(f) GDPR); you can object by turning crash reports off in Settings. On the same basis we process basic account usage data and keep aggregate statistics — our legitimate interest is knowing how many people use the app and on which platforms.</p>

<h2>4. Who we share data with</h2>
<p>To run the app we use external service providers that process data on our behalf or at our request:</p>
<ul>
  <li><strong>Google Firebase</strong> (Google Ireland Limited / Google LLC) — authentication (Firebase Authentication), storage of account and library data (Cloud Firestore, region europe-central2, Warsaw), crash reports (Firebase Crashlytics) and checking that connections to the database come from the genuine app (Firebase App Check with Google Play Integrity on Android, Apple’s App Attest and DeviceCheck on iPhone and iPad, and reCAPTCHA in the browser) — to protect against abuse.</li>
  <li><strong>The Movie Database (TMDb)</strong> — the source of movie/TV show metadata (titles, descriptions, posters, release dates). Search queries sent to TMDb are not linked to your account or any other personal data — they are ordinary requests for publicly available information about titles.</li>
</ul>
<p>We do not sell your data or share it with third parties for marketing purposes.</p>

<h2>5. Transfers outside the European Economic Area</h2>
<p>Google’s infrastructure (Firebase) may in some cases process data on servers outside the EEA — this is done on the basis of compliance mechanisms recognized by the GDPR, including the standard contractual clauses used by Google.</p>

<h2>6. Data retention</h2>
<p>We keep your data for as long as your account exists. You can delete your account together with all related data at any time, on your own, in the app (Settings → Delete account → Delete account permanently) — deletion is permanent and immediate. Exception: after you change your username or delete your account, the previous username stays reserved for 14 days so that nobody can immediately impersonate you. The reservation record contains only the username itself, a technical account identifier and the release date; it remains until someone else takes the name. After account deletion two technical records without personal data other than the account identifier also remain: the date of the last username change and the counter of feedback messages sent. See also <a href="{{deleteUrl}}">how to delete your account</a>.</p>

<h2>7. Your rights</h2>
<p>Under the GDPR you have the right to access your data, rectify it, erase it, restrict its processing, port it and object to its processing. You can exercise most of these rights yourself in the app (editing/deleting library entries, deleting your account). For anything else, write to the address given in the “Contact” section. You also have the right to lodge a complaint with a supervisory authority — in Poland, the President of the Personal Data Protection Office (UODO).</p>

<h2>8. Data security</h2>
<p>Access to library data in the Firestore database is restricted by security rules to the account owner only — no other user of the app can access it. Passwords of accounts created with email are handled entirely by Firebase Authentication and are never stored by us in plain text.</p>

<h2>9. Children</h2>
<p>The app is not directed at children under 16, and we do not knowingly collect personal data from them.</p>

<h2>10. Changes to this privacy policy</h2>
<p>This policy may be updated as the app evolves. The date of the last update is always shown at the top of this page.</p>

<h2>11. Contact</h2>
<p>${OWNER}, ${mail}</p>
`,
  pl: `
<h2>1. Administrator danych</h2>
<p>Administratorem danych osobowych zbieranych w aplikacji Seansownik (w wersji angielskiej: Seenit) jest ${OWNER}, kontakt: ${mail}.</p>

<h2>2. Jakie dane zbieramy</h2>
<p>Seansownik wymaga założenia konta, żeby zapisywać i synchronizować Twoją bibliotekę filmów i seriali między urządzeniami. W związku z tym przetwarzamy:</p>
<ul>
  <li><strong>Dane konta</strong> — przy rejestracji e-mailem: adres e-mail i hasło (hasło nigdy nie trafia do nas w formie jawnej — obsługuje je bezpośrednio Firebase Authentication firmy Google). Przy logowaniu przez Google: adres e-mail, imię i zdjęcie profilowe udostępnione przez Twoje konto Google. Przy logowaniu przez Apple (iPhone, iPad): adres e-mail udostępniony przez Apple — jeśli wybierzesz „Ukryj mój adres e-mail”, będzie to losowy adres przekazujący od Apple, a nie Twój prawdziwy.</li>
  <li><strong>Nazwa użytkownika</strong> — każde konto ma unikalną nazwę. Domyślnie tworzymy ją z części Twojego adresu e-mail przed znakiem „@” (nigdy z całego adresu) i możesz ją zmienić w Ustawieniach, najwyżej raz na 3 dni. Zapisujemy też datę ostatniej zmiany nazwy. Obecnie nazwę widzisz tylko Ty; jeśli w przyszłości pojawią się funkcje, w których będzie widoczna dla innych, poinformujemy o tym wcześniej.</li>
  <li><strong>Dane biblioteki</strong> — tytuły filmów/seriali dodane do biblioteki, nadany status (Planowane/W trakcie/Na bieżąco/Ukończono/Porzucone), oceny, postęp oglądania (obejrzane sezony/odcinki wraz z datami obejrzeń, z których liczymy Twoje statystyki, np. podsumowanie roku) oraz informacja, czy wyciszyłeś/-aś powiadomienia o danym tytule.</li>
  <li><strong>Podstawowe dane o korzystaniu z konta</strong> — przy koncie zapisujemy datę jego założenia, dzień ostatniego użycia aplikacji (sama data, bez godziny), platformę (Android, iOS lub przeglądarka), język aplikacji i jej wersję. Zapisujemy też dni korzystania z aplikacji (same daty, bez godzin), a w aplikacji na Androida i iOS listę urządzeń używanych z kontem: losowy identyfikator instalacji aplikacji (nie jest to identyfikator telefonu ani identyfikator reklamowy; po ponownej instalacji aplikacji powstaje nowy), platformę, wersję aplikacji, datę dodania urządzenia i dzień jego ostatniego użycia. Wpis urządzenia usuwamy, gdy wylogujesz się na tym urządzeniu. Te dane służą wyłącznie do zbiorczych statystyk, np. liczby aktywnych kont w poszczególnych dniach i liczby urządzeń z aplikacją. Nie zapisujemy, które ekrany otwierasz ani co klikasz.</li>
  <li><strong>Opinie i zgłoszenia</strong> — jeśli wyślesz zgłoszenie przez formularz „Opinie i zgłoszenia”, zapisujemy jego rodzaj (błąd, pomysł, inne), treść, datę i status, a także wersję aplikacji, platformę, język oraz wybrany ekran aplikacji, którego dotyczy zgłoszenie. Zgłoszenie jest powiązane z Twoim kontem, dzięki czemu jego status widać w aplikacji. Przechowujemy je do czasu usunięcia konta.</li>
  <li><strong>Raporty o błędach (tylko aplikacja na Androida i iOS)</strong> — gdy w aplikacji wystąpi błąd, wysyłany jest raport techniczny: miejsce błędu w kodzie, model urządzenia, wersja systemu i aplikacji, stan pamięci oraz losowy identyfikator instalacji. Raport nie zawiera Twojego adresu e-mail, danych konta ani biblioteki. Raporty obsługuje Firebase Crashlytics i są przechowywane przez ok. 90 dni. Wysyłanie raportów możesz w każdej chwili wyłączyć w Ustawieniach aplikacji („Wysyłaj raporty o błędach”).</li>
  <li><strong>Dane techniczne przechowywane wyłącznie lokalnie na Twoim urządzeniu</strong> — podręczny cache wyników wyszukiwania i szczegółów tytułów (żeby aplikacja działała szybciej i offline) oraz ustawienia aplikacji (np. motyw, język, ustawienia powiadomień). Te dane nie są przez nas zbierane ani wysyłane na żadne serwery poza Twoim urządzeniem. Powiadomienia o premierach, jeśli je włączysz, są planowane lokalnie na Twoim urządzeniu na podstawie Twojej biblioteki; nie korzystamy przy tym z zewnętrznej usługi powiadomień.</li>
</ul>
<p>Aplikacja nie zawiera obecnie reklam ani zewnętrznych narzędzi analitycznych/śledzących i nie zbiera danych o zachowaniu w celach marketingowych. Raporty o błędach służą wyłącznie do wykrywania i naprawiania usterek. Na podstawie danych z bazy prowadzimy wyłącznie własne, zbiorcze statystyki: liczbę kont, liczbę aktywnych kont, podział na platformy i języki oraz liczbę wpisów w bibliotekach w podziale na statusy.</p>

<h2>3. Cel i podstawa prawna przetwarzania</h2>
<p>Dane przetwarzamy w celu świadczenia usługi — założenia i utrzymania konta oraz zapisywania i synchronizowania Twojej biblioteki między urządzeniami. Podstawą prawną jest niezbędność przetwarzania do wykonania umowy o świadczenie usługi drogą elektroniczną (art. 6 ust. 1 lit. b RODO), a przy logowaniu przez Google lub Apple — również Twoja zgoda wyrażona przy wyborze tej metody logowania (art. 6 ust. 1 lit. a RODO). Raporty o błędach przetwarzamy na podstawie naszego prawnie uzasadnionego interesu, jakim jest zapewnienie stabilnego działania aplikacji (art. 6 ust. 1 lit. f RODO); możesz się temu sprzeciwić, wyłączając raporty w Ustawieniach. Na tej samej podstawie przetwarzamy podstawowe dane o korzystaniu z konta i prowadzimy zbiorcze statystyki — naszym uzasadnionym interesem jest wiedza o tym, ile osób korzysta z aplikacji i na jakich platformach.</p>

<h2>4. Komu przekazujemy dane</h2>
<p>Do działania aplikacji korzystamy z zewnętrznych dostawców usług, którzy przetwarzają dane w naszym imieniu lub na nasze zlecenie:</p>
<ul>
  <li><strong>Google Firebase</strong> (Google Ireland Limited / Google LLC) — uwierzytelnianie (Firebase Authentication), przechowywanie danych konta i biblioteki (Cloud Firestore, region europe-central2, Warszawa), raporty o błędach (Firebase Crashlytics) oraz sprawdzanie, czy połączenia z bazą pochodzą z oryginalnej aplikacji (Firebase App Check z usługą Google Play Integrity na Androidzie, App Attest i DeviceCheck firmy Apple na iPhonie i iPadzie oraz reCAPTCHA w przeglądarce) — w celu ochrony przed nadużyciami.</li>
  <li><strong>The Movie Database (TMDb)</strong> — źródło metadanych filmów/seriali (tytuły, opisy, plakaty, daty premier). Zapytania wyszukiwania wysyłane do TMDb nie są powiązane z Twoim kontem ani innymi danymi osobowymi — to zwykłe zapytania o publicznie dostępne informacje o tytułach.</li>
</ul>
<p>Nie sprzedajemy ani nie udostępniamy Twoich danych podmiotom trzecim w celach marketingowych.</p>

<h2>5. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
<p>Infrastruktura Google (Firebase) może w niektórych przypadkach przetwarzać dane na serwerach poza EOG — odbywa się to w oparciu o mechanizmy zgodności uznane przez RODO, w tym standardowe klauzule umowne stosowane przez Google.</p>

<h2>6. Okres przechowywania danych</h2>
<p>Dane przechowujemy przez cały czas istnienia Twojego konta. Możesz w każdej chwili samodzielnie usunąć konto wraz ze wszystkimi powiązanymi danymi z poziomu aplikacji (Ustawienia → Usuwanie konta → Usuń konto na stałe) — usunięcie jest trwałe i natychmiastowe. Wyjątek: po zmianie nazwy użytkownika lub usunięciu konta poprzednia nazwa pozostaje zarezerwowana przez 14 dni, żeby nikt nie mógł od razu się pod nią podszyć. Zapis tej rezerwacji zawiera wyłącznie samą nazwę, techniczny identyfikator konta i datę zwolnienia; pozostaje do czasu, aż nazwę zajmie inna osoba. Po usunięciu konta zostają też dwa zapisy techniczne bez danych osobowych poza identyfikatorem konta: data ostatniej zmiany nazwy i licznik wysłanych zgłoszeń. Zobacz też, <a href="{{deleteUrl}}">jak usunąć konto</a>.</p>

<h2>7. Twoje prawa</h2>
<p>Zgodnie z RODO przysługuje Ci prawo do: dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz sprzeciwu wobec przetwarzania. Większość z tych praw możesz zrealizować samodzielnie w aplikacji (edycja/usunięcie wpisów biblioteki, usunięcie konta). W pozostałych sprawach napisz na adres podany w sekcji „Kontakt”. Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</p>

<h2>8. Bezpieczeństwo danych</h2>
<p>Dostęp do danych biblioteki w bazie Firestore jest ograniczony regułami bezpieczeństwa wyłącznie do właściciela konta — żaden inny użytkownik aplikacji nie ma do nich dostępu. Hasła kont zakładanych e-mailem są w całości obsługiwane przez Firebase Authentication i nigdy nie są przechowywane przez nas w postaci jawnej.</p>

<h2>9. Dzieci</h2>
<p>Aplikacja nie jest kierowana do dzieci poniżej 16. roku życia i nie zbieramy świadomie danych osobowych takich osób.</p>

<h2>10. Zmiany polityki prywatności</h2>
<p>Ta polityka może być aktualizowana wraz z rozwojem aplikacji. Data ostatniej aktualizacji jest zawsze widoczna na górze tej strony.</p>

<h2>11. Kontakt</h2>
<p>${OWNER}, ${mail}</p>
`,
};

// ---------------------------------------------------------------- seansownik: delete account

const seansownikDelete = {
  en: `
<h2>1. Deleting in the app (recommended)</h2>
<p>If you have the app installed and can access your account, you can delete it yourself in a few steps:</p>
<ol>
  <li>Open Seenit and sign in to your account.</li>
  <li>Open the menu (the ☰ icon in the top-left corner) and choose <strong>Settings</strong>.</li>
  <li>Choose <strong>Account</strong>, scroll down to the <strong>Delete account</strong> section and tap <strong>Delete account permanently</strong>.</li>
  <li>In the confirmation field, type exactly <strong>DELETE</strong> (in the Polish version of the app: <strong>USUŃ</strong>), enter your account password and confirm. If you sign in with Google, the app will ask you to choose your Google account again instead.</li>
</ol>
<p>Your account and all data associated with it (library, statuses, ratings, watch progress) are deleted <strong>immediately and permanently</strong> — this cannot be undone.</p>

<h2>2. Deleting without access to the app</h2>
<p>If you no longer have access to the app (e.g. you uninstalled it, changed devices or forgot your password), email us from the address associated with your account: <a href="mailto:${EMAIL}?subject=Seenit%20account%20deletion">${EMAIL}</a>.</p>
<p>In your message, include the email address your account is registered with and say that you want it deleted. We will process your request within 30 days at the latest and confirm the deletion by email.</p>

<h2>3. What data is deleted</h2>
<ul>
  <li>Your account (email address, sign-in data — including the link to your Google account, if you used it).</li>
  <li>Your entire library: saved movies/TV shows, statuses, ratings and watch progress (watched seasons/episodes).</li>
  <li>Messages sent through the “Feedback” form.</li>
  <li>Account data used for aggregate statistics (creation date, day of last use, platform, app language and version) and the username assigned to your account. The username itself stays reserved for 14 days so that nobody can immediately impersonate you — see the Privacy Policy for details.</li>
</ul>
<p>A full description of the data we process and on what basis can be found in our <a href="{{privacyUrl}}">Privacy Policy</a>.</p>
`,
  pl: `
<h2>1. Usuwanie w aplikacji (zalecane)</h2>
<p>Jeśli masz zainstalowaną aplikację i dostęp do swojego konta, możesz usunąć je samodzielnie w kilku krokach:</p>
<ol>
  <li>Otwórz Seansownik i zaloguj się na swoje konto.</li>
  <li>Otwórz menu (ikona ☰ w lewym górnym rogu) i wybierz <strong>Ustawienia</strong>.</li>
  <li>Wybierz <strong>Konto</strong>, zjedź do sekcji <strong>Usuwanie konta</strong> i naciśnij <strong>Usuń konto na stałe</strong>.</li>
  <li>W polu potwierdzenia wpisz dokładnie słowo <strong>USUŃ</strong> (w angielskiej wersji aplikacji: <strong>DELETE</strong>), podaj hasło do konta i potwierdź. Jeśli logujesz się przez Google, zamiast hasła aplikacja poprosi o ponowne wybranie konta Google.</li>
</ol>
<p>Konto oraz wszystkie powiązane z nim dane (biblioteka, statusy, oceny, postęp oglądania) zostają usunięte <strong>natychmiast i trwale</strong> — tej operacji nie da się cofnąć.</p>

<h2>2. Usuwanie bez dostępu do aplikacji</h2>
<p>Jeśli nie masz już dostępu do aplikacji (np. ją odinstalowałeś/-aś, zmieniłeś/-aś urządzenie lub zapomniałeś/-aś hasła), napisz do nas z adresu e-mail powiązanego z kontem: <a href="mailto:${EMAIL}?subject=Usuni%C4%99cie%20konta%20Seansownik">${EMAIL}</a>.</p>
<p>Podaj w wiadomości adres e-mail, na który zarejestrowane jest konto, i napisz, że chcesz je usunąć. Prośbę zrealizujemy najpóźniej w ciągu 30 dni i potwierdzimy usunięcie odpowiedzią e-mail.</p>

<h2>3. Jakie dane są usuwane</h2>
<ul>
  <li>Konto (adres e-mail, dane logowania — w tym powiązanie z kontem Google, jeśli było używane).</li>
  <li>Cała biblioteka: zapisane filmy/seriale, statusy, oceny, postęp oglądania (obejrzane sezony/odcinki).</li>
  <li>Zgłoszenia wysłane przez formularz „Opinie i zgłoszenia”.</li>
  <li>Dane konta używane do zbiorczych statystyk (data założenia, dzień ostatniego użycia, platforma, język i wersja aplikacji) oraz nazwa użytkownika przypisana do konta. Sama nazwa pozostaje zarezerwowana przez 14 dni, żeby nikt nie mógł od razu się pod nią podszyć — szczegóły w polityce prywatności.</li>
</ul>
<p>Pełny opis danych, które przetwarzamy, i na jakiej podstawie, znajduje się w <a href="{{privacyUrl}}">polityce prywatności</a>.</p>
`,
};

// ---------------------------------------------------------------- legal pages per app
// Generated at /<slug>/<doc>/ (and /en/...). Order = order of links on the app page.
// {{privacyUrl}} and {{deleteUrl}} in the HTML point to the same app's pages.

export const LEGAL = {
  seansownik: [
    { slug: 'privacy', key: 'privacy', updated: { en: '23 November 2026', pl: '23 listopada 2026' }, html: seansownikPrivacy },
    { slug: 'delete-account', key: 'deleteAccount', updated: { en: '19 October 2026', pl: '19 października 2026' }, html: seansownikDelete },
  ],
  spendio: [
    { slug: 'privacy', key: 'privacy', updated: UPDATED, html: privacy },
    { slug: 'terms', key: 'terms', updated: UPDATED, html: terms },
    { slug: 'delete-account', key: 'deleteAccount', updated: UPDATED, html: deleteAccount },
  ],
};
