(() => {
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const vi = {
    'Apple Design Resources — Clone':'Tài nguyên thiết kế Apple — Bản dựng lại',
    'Skip to content':'Chuyển đến nội dung', 'Developer':'Nhà phát triển', 'Get Started':'Bắt đầu',
    'Platforms':'Nền tảng', 'Technologies':'Công nghệ', 'Community':'Cộng đồng', 'Documentation':'Tài liệu',
    'Downloads':'Tải về', 'Support':'Hỗ trợ', 'Design':'Thiết kế', 'Overview':'Tổng quan',
    'Human Interface Guidelines':'Hướng dẫn giao diện', 'Resources':'Tài nguyên',
    'Search design resources':'Tìm tài nguyên thiết kế', 'Apple Design Resources':'Tài nguyên thiết kế Apple',
    'Design apps accurately and quickly using official Apple design templates, icon production templates, color guides, and more.':'Thiết kế ứng dụng nhanh chóng và chính xác với các mẫu thiết kế, mẫu tạo biểu tượng, hướng dẫn màu sắc chính thức từ Apple và nhiều tài nguyên khác.',
    'Fonts':'Phông chữ', 'Tools':'Công cụ', 'Product Bezels':'Khung thiết bị', 'iOS and iPadOS':'iOS và iPadOS',
    'iOS 27 and iPadOS 27':'iOS 27 và iPadOS 27', 'UI Kit':'Bộ giao diện', 'App Icon Template':'Mẫu biểu tượng ứng dụng',
    'Note: Sketch must be installed to download':'Lưu ý: Cần cài đặt Sketch để tải về',
    'Templates':'Mẫu thiết kế', 'Production Templates':'Mẫu sản xuất', 'Add Apple Watch Face':'Thêm mặt đồng hồ Apple Watch',
    'Design Guidelines':'Hướng dẫn thiết kế', 'App Clips Design Template':'Mẫu thiết kế App Clips',
    'Apple Health Icon':'Biểu tượng Apple Health', 'Apple Pay Design Template':'Mẫu thiết kế Apple Pay',
    'ARKit Badge and Glyph':'Huy hiệu và biểu tượng ARKit', 'Camera Control':'Điều khiển camera',
    'Games and Game Center':'Trò chơi và Game Center', 'HomeKit Icon and Glyph':'Biểu tượng HomeKit',
    'Live Activities Template':'Mẫu Live Activities', 'Messages Template':'Mẫu Tin nhắn',
    'Sign in with Apple Logo':'Logo Đăng nhập bằng Apple', 'Sign in with Apple Buttons':'Nút Đăng nhập bằng Apple',
    'Siri and App Shortcuts Template':'Mẫu Siri và phím tắt ứng dụng', 'Siri Icons':'Biểu tượng Siri',
    'Tap to Pay on iPhone Template':'Mẫu Tap to Pay trên iPhone', 'TipKit Template':'Mẫu TipKit', 'Wallet Template':'Mẫu Ví',
    'Download SF Pro':'Tải SF Pro', 'System font for iOS, iPadOS, macOS and tvOS.':'Phông chữ hệ thống cho iOS, iPadOS, macOS và tvOS.',
    'Download SF Compact':'Tải SF Compact',
    'System font for watchOS, optimized for small sizes and narrow columns.':'Phông chữ hệ thống cho watchOS, được tối ưu cho kích thước nhỏ và cột hẹp.',
    'Download SF Mono':'Tải SF Mono', 'Used in Xcode, enables alignment between rows and columns of text.':'Được sử dụng trong Xcode để căn chỉnh các hàng và cột văn bản.',
    'Download New York':'Tải New York',
    'Performs as a traditional reading face at small sizes and a graphic display face at larger sizes.':'Phù hợp để đọc ở kích thước nhỏ và làm chữ hiển thị đồ họa ở kích thước lớn.',
    'Download SF Arabic':'Tải SF Arabic', 'Arabic system font on Apple platforms.':'Phông chữ hệ thống tiếng Ả Rập trên các nền tảng Apple.',
    'Download SF Armenian':'Tải SF Armenian',
    'Designed with proportions that have been adjusted for a better visual balance in multilingual typesetting.':'Được điều chỉnh tỷ lệ để tạo sự cân bằng thị giác tốt hơn khi dàn trang đa ngôn ngữ.',
    'Download SF Georgian':'Tải SF Georgian', 'Supports modern Georgian, Mkhedruli, and Mtavruli uppercase forms.':'Hỗ trợ tiếng Georgia hiện đại, chữ Mkhedruli và chữ hoa Mtavruli.',
    'Download SF Hebrew':'Tải SF Hebrew', 'With full support of the Niqqud diacritical marks.':'Hỗ trợ đầy đủ các dấu phụ Niqqud.',
    'SF Symbols is a library of over 7,000 symbols designed to integrate seamlessly with San Francisco, the system font for Apple platforms. Symbols come in nine weights and three scales, automatically align with text, and can be exported and edited using vector graphics tools to create custom symbols with shared design characteristics and accessibility features. Symbols feature multi-layer drawings designed for motion, enabling a range of expressive animations. Crafted for a global audience, symbols automatically adapt to a user’s reading direction and feature localized designs for over 20 international scripts.':'SF Symbols là thư viện gồm hơn 7.000 biểu tượng, được thiết kế để kết hợp hài hòa với San Francisco — phông chữ hệ thống trên các nền tảng Apple. Các biểu tượng có chín độ đậm và ba tỷ lệ, tự động căn chỉnh với văn bản, đồng thời có thể xuất và chỉnh sửa bằng công cụ đồ họa vector để tạo biểu tượng tùy chỉnh với phong cách thiết kế và tính năng trợ năng nhất quán. Cấu trúc nhiều lớp hỗ trợ các hiệu ứng chuyển động phong phú. Biểu tượng tự thích ứng với hướng đọc của người dùng và có các phiên bản bản địa hóa cho hơn 20 hệ chữ trên thế giới.',
    'Learn more':'Tìm hiểu thêm', 'Download SF Symbols 27':'Tải SF Symbols 27',
    'Requires macOS Sonoma or later.':'Yêu cầu macOS Sonoma trở lên.',
    'Icon Composer lets you create layered icons out of Liquid Glass from a single design for iPhone, iPad, Mac, and Apple Watch. A multi-layer icon format allows you to craft your icon and annotate it across appearance modes. Icon Composer is designed to work seamlessly with Xcode and provides the option to export a flattened version of your icon for marketing and communication needs.':'Icon Composer giúp bạn tạo biểu tượng Liquid Glass nhiều lớp từ một thiết kế duy nhất cho iPhone, iPad, Mac và Apple Watch. Định dạng nhiều lớp cho phép tinh chỉnh biểu tượng và thiết lập cách hiển thị ở từng chế độ giao diện. Icon Composer tích hợp với Xcode và hỗ trợ xuất biểu tượng thành ảnh phẳng để sử dụng trong tiếp thị và truyền thông.',
    'Download Icon Composer':'Tải Icon Composer', 'Requires macOS Sequoia or later.':'Yêu cầu macOS Sequoia trở lên.',
    'Parallax image tools':'Công cụ hình ảnh thị sai',
    'Use Parallax Previewer to deliver parallax visual effects that transform static images into dynamic and immersive experiences on tvOS and visionOS.':'Sử dụng Parallax Previewer để tạo hiệu ứng thị sai, biến hình ảnh tĩnh thành trải nghiệm sống động và có chiều sâu trên tvOS và visionOS.',
    'Parallax Previewer App':'Ứng dụng Parallax Previewer', 'Download version 2 for macOS':'Tải phiên bản 2 cho macOS',
    'Requires macOS 13.5 or later.':'Yêu cầu macOS 13.5 trở lên.', 'Download version 1 for macOS':'Tải phiên bản 1 cho macOS',
    'Requires macOS 10.10.5 or later.':'Yêu cầu macOS 10.10.5 trở lên.', 'User Guide':'Hướng dẫn sử dụng',
    'When using product bezels in your marketing materials, be sure to review these':'Khi sử dụng khung thiết bị trong tài liệu tiếp thị, hãy tham khảo',
    'Marketing Resources and Identity Guidelines':'Tài nguyên tiếp thị và hướng dẫn nhận diện thương hiệu',
    'Studio Displays':'Màn hình Studio Display', 'iPhone and iPad for Keynote Live Video':'iPhone và iPad cho Video trực tiếp trong Keynote',
    'Badges and Logos':'Huy hiệu và logo',
    'Find badges and logos for Apple technologies, such as Apple Health, Apple Wallet, Apple Music, and Apple Pay, that can be used in your app’s marketing material.':'Tìm huy hiệu và logo cho các công nghệ Apple như Apple Health, Apple Wallet, Apple Music và Apple Pay để sử dụng trong tài liệu tiếp thị ứng dụng của bạn.',
    'View Apple Badges and Logos':'Xem huy hiệu và logo Apple', ' Developer':' Nhà phát triển',
    'Developer Resources':'Tài nguyên cho nhà phát triển',
    'Independent interface recreation for demonstration. Resources belong to Apple.':'Bản dựng lại giao diện độc lập để minh họa. Các tài nguyên thuộc về Apple.',
    'View original ↗':'Xem trang gốc ↗',
    'Home':'Trang chủ', 'Search resources':'Tìm tài nguyên', 'Open navigation':'Mở menu điều hướng',
    'Close navigation':'Đóng menu điều hướng', 'Design navigation':'Điều hướng thiết kế', 'Global navigation':'Điều hướng chính',
    'Close search':'Đóng tìm kiếm', 'Back to top':'Quay lên đầu trang',
    'Find UI kits, fonts, templates…':'Tìm bộ giao diện, phông chữ, mẫu thiết kế…',
    'A responsive recreation of Apple Design Resources, with UI kits, templates, fonts and design tools.':'Bản dựng lại trang tài nguyên thiết kế Apple, gồm bộ giao diện, mẫu thiết kế, phông chữ và công cụ thiết kế.'
  };
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, [data-no-translate]')) continue;
    if (vi[normalize(node.nodeValue)]) textNodes.push({node, en:node.nodeValue, vi:vi[normalize(node.nodeValue)]});
  }
  const attributes = [];
  document.querySelectorAll('[aria-label], [placeholder], meta[name="description"]').forEach(el => {
    for (const attr of ['aria-label', 'placeholder', 'content']) {
      const en = el.getAttribute(attr);
      if (en && vi[normalize(en)]) attributes.push({el, attr, en, vi:vi[normalize(en)]});
    }
  });
  const title = document.title;
  const select = document.querySelector('#language-select');
  let language = 'vi';
  function setLanguage(value, persist = true) {
    language = value === 'en' ? 'en' : 'vi';
    textNodes.forEach(item => {item.node.nodeValue = language === 'vi' ? item.en.replace(item.en.trim(),item.vi) : item.en;});
    attributes.forEach(item => item.el.setAttribute(item.attr,item[language]));
    document.documentElement.lang = language;
    document.title = language === 'vi' ? vi[title] : title;
    select.value = language;
    select.setAttribute('aria-label', language === 'vi' ? 'Ngôn ngữ' : 'Language');
    if (persist) {
      try {localStorage.setItem('design-resources-language', language);} catch {}
      const url = new URL(location.href); url.searchParams.set('lang',language);
      try {history.replaceState(null,'',url);} catch {}
    }
    document.querySelectorAll('.download-image').forEach(img => {
      const heading=img.parentElement.querySelector('h5')?.textContent;
      img.alt = language === 'vi' ? `Xem trước ${heading || 'tài nguyên thiết kế'}` : `${heading || 'Design resource'} preview`;
    });
    document.dispatchEvent(new CustomEvent('languagechange', {detail:{language}}));
  }
  let saved;
  try {saved=localStorage.getItem('design-resources-language');} catch {}
  const requested=new URL(location.href).searchParams.get('lang');
  setLanguage(['vi','en'].includes(requested)?requested:(['vi','en'].includes(saved)?saved:'vi'), false);
  select.addEventListener('change',()=>setLanguage(select.value));
  window.siteI18n = {get language(){return language;}, setLanguage, translate: en => language === 'vi' ? (vi[normalize(en)] || en) : en};
})();
