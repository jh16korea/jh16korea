export type Language = 'en' | 'vi' | 'th';

export interface Translation {
  nav: {
    home: string;
    about: string;
    history: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  history: {
    title: string;
    items: { year: string; content: string }[];
  };
  brands: {
    title: string;
    description: string;
  };
  footer: {
    address: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      history: 'History',
      products: 'Products',
      contact: 'Contact',
    },
    hero: {
      title: 'Global Export Specialist of K-FOOD',
      subtitle: 'Premium Korean seafood products for global markets, specializing in franchise food ingredients.',
      cta: 'Explore Products',
    },
    about: {
      title: 'Company Overview',
      content: 'JH16 Korea Co., Ltd. is a global seafood export company that supplies premium Korean seafood products to world markets, with a particular focus on Southeast Asia (ASEAN). Since its founding in Jeonju in 2019, we have successfully entered major retail networks and food service franchise markets.',
    },
    history: {
      title: 'Company History',
      items: [
        { year: '2019', content: 'Established JH16 Korea Co., Ltd. in Jeonju.' },
        { year: '2023', content: 'Expanded into Southeast Asian export markets.' },
        { year: '2024', content: 'Established Vietnam partnerships & obtained import licenses.' },
        { year: '2025.04', content: 'Commenced export of premium frozen flounder, tuna, and salmon fillets to Vietnam.' },
        { year: '2025.08', content: 'Launched new menu (Mussels & Fish Cakes) with Dookki Tteokbokki franchise.' },
        { year: '2025.09', content: 'Expanded to 15 Lotte Mart locations in Vietnam.' },
        { year: '2025.10', content: 'Collaborated with local Michelin-starred chefs in Vietnam.' },
      ],
    },
    brands: {
      title: 'Our Brands & Partners',
      description: 'We provide high-value K-Seafood products under our integrated brand HANKKI and partner with leading franchises like Dookki.',
    },
    footer: {
      address: '109 Cheonjam-ro, Wansan-gu, Jeonju, Korea',
      rights: '© 2026 JH16 Korea Co., Ltd. All rights reserved.',
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      history: 'Lịch sử',
      products: 'Sản phẩm',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Chuyên gia xuất khẩu K-FOOD toàn cầu',
      subtitle: 'Cung cấp hải sản Hàn Quốc cao cấp cho thị trường thế giới, chuyên về nguyên liệu thực phẩm nhượng quyền.',
      cta: 'Khám phá sản phẩm',
    },
    about: {
      title: 'Tổng quan công ty',
      content: 'JH16 Korea Co., Ltd. là công ty xuất khẩu hải sản toàn cầu cung cấp các sản phẩm hải sản Hàn Quốc cao cấp cho thị trường thế giới, đặc biệt tập trung vào Đông Nam Á (ASEAN). Kể từ khi thành lập tại Jeonju vào năm 2019, chúng tôi đã thâm nhập thành công vào các mạng lưới bán lẻ lớn và thị trường nhượng quyền dịch vụ thực phẩm.',
    },
    history: {
      title: 'Lịch sử công ty',
      items: [
        { year: '2019', content: 'Thành lập JH16 Korea Co., Ltd. tại Jeonju.' },
        { year: '2023', content: 'Mở rộng sang thị trường xuất khẩu Đông Nam Á.' },
        { year: '2024', content: 'Thiết lập quan hệ đối tác tại Việt Nam và nhận giấy phép nhập khẩu.' },
        { year: '2025.04', content: 'Bắt đầu xuất khẩu cá bơn, cá ngừ và phi lê cá hồi đông lạnh cao cấp sang Việt Nam.' },
        { year: '2025.08', content: 'Ra mắt thực đơn mới (Vẹm & Chả cá) cùng chuỗi nhượng quyền Dookki Tteokbokki.' },
        { year: '2025.09', content: 'Mở rộng sự hiện diện tại 15 địa điểm Lotte Mart ở Việt Nam.' },
        { year: '2025.10', content: 'Hợp tác với các đầu bếp đạt sao Michelin tại Việt Nam.' },
      ],
    },
    brands: {
      title: 'Thương hiệu & Đối tác',
      description: 'Chúng tôi cung cấp các sản phẩm hải sản K-Seafood giá trị cao dưới thương hiệu tích hợp HANKKI và hợp tác với các chuỗi nhượng quyền hàng đầu như Dookki.',
    },
    footer: {
      address: '109 Cheonjam-ro, Wansan-gu, Jeonju, Hàn Quốc',
      rights: '© 2026 JH16 Korea Co., Ltd. Bảo lưu mọi quyền.',
    },
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      history: 'ประวัติ',
      products: 'สินค้า',
      contact: 'ติดต่อ',
    },
    hero: {
      title: 'ผู้เชี่ยวชาญด้านการส่งออก K-FOOD ระดับโลก',
      subtitle: 'จัดหาผลิตภัณฑ์อาหารทะเลเกาหลีระดับพรีเมียมสู่ตลาดโลก โดยเฉพาะวัตถุดิบอาหารสำหรับธุรกิจแฟรนไชส์',
      cta: 'ดูสินค้าของเรา',
    },
    about: {
      title: 'ภาพรวมบริษัท',
      content: 'JH16 Korea Co., Ltd. เป็นบริษัทส่งออกอาหารทะเลระดับโลกที่จัดหาผลิตภัณฑ์อาหารทะเลเกาหลีระดับพรีเมียมสู่ตลาดโลก โดยเน้นที่เอเชียตะวันออกเฉียงใต้ (อาเซียน) เป็นพิเศษ นับตั้งแต่ก่อตั้งในเมืองจอนจูในปี 2019 เราประสบความสำเร็จในการเข้าสู่เครือข่ายค้าปลีกรายใหญ่และตลาดแฟรนไชส์บริการอาหาร',
    },
    history: {
      title: 'ประวัติบริษัท',
      items: [
        { year: '2019', content: 'ก่อตั้ง JH16 Korea Co., Ltd. ในเมืองจอนจู' },
        { year: '2023', content: 'ขยายเข้าสู่ตลาดส่งออกในเอเชียตะวันออกเฉียงใต้' },
        { year: '2024', content: 'สร้างพันธมิตรในเวียดนามและได้รับใบอนุญาตนำเข้า' },
        { year: '2025.04', content: 'เริ่มส่งออกปลาตาเดียว ปลาทูน่า และปลาแซลมอนฟิลเลต์แช่แข็งระดับพรีเมียมไปยังเวียดนาม' },
        { year: '2025.08', content: 'เปิดตัวเมนูใหม่ (หอยแมลงภู่และลูกชิ้นปลา) ร่วมกับแฟรนไชส์ Dookki Tteokbokki' },
        { year: '2025.09', content: 'ขยายสาขาไปยัง Lotte Mart 15 แห่งในเวียดนาม' },
        { year: '2025.10', content: 'ร่วมมือกับเชฟระดับมิชลินในเวียดนาม' },
      ],
    },
    brands: {
      title: 'แบรนด์และพันธมิตรของเรา',
      description: 'เรานำเสนอผลิตภัณฑ์ K-Seafood ที่มีมูลค่าสูงภายใต้แบรนด์ HANKKI และร่วมมือกับแฟรนไชส์ชั้นนำอย่าง Dookki',
    },
    footer: {
      address: '109 Cheonjam-ro, Wansan-gu, Jeonju, เกาหลีใต้',
      rights: '© 2026 JH16 Korea Co., Ltd. สงวนลิขสิทธิ์',
    },
  },
};
