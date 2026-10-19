# Apple Design Resources — VI / EN

Bản dựng lại giao diện Apple Design Resources, hỗ trợ tiếng Việt và tiếng Anh, bố cục thích ứng, tìm kiếm không dấu và ghi nhớ ngôn ngữ.

## Chạy thử

Cần Python 3, không cần cài thư viện hay biên dịch. Ảnh gốc được tải từ Apple theo manifest; cần kết nối Internet cho lần tải đầu tiên. Chạy từ thư mục repository:

```sh
python3 scripts/download-assets.py
python3 -m http.server 8080 --directory dist
```

Mở http://localhost:8080/?lang=vi hoặc http://localhost:8080/?lang=en.

## GitHub Pages

Trong **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**. Workflow `Deploy GitHub Pages` sẽ xuất bản thư mục `dist` khi có thay đổi trên nhánh `main`. Có thể chạy thủ công trong tab Actions.

## Cấu trúc

- `dist/index.html`: cấu trúc trang và liên kết tài nguyên.
- `dist/style.css`, `dist/resources.css`: giao diện và bố cục responsive.
- `dist/app.js`: menu, tìm kiếm, nút quay lên đầu trang.
- `dist/i18n.js`: bản dịch, chọn ngôn ngữ và lưu tùy chọn.
- `scripts/assets.json`: nguồn tải 75 ảnh và biểu tượng Apple.
- `scripts/download-assets.py`: tải các tài nguyên vào `dist/assets/`; GitHub Actions thực hiện tự động.

Tên sản phẩm và tài nguyên thiết kế thuộc về Apple. Đây là bản dựng lại độc lập để minh họa, không phải website chính thức của Apple. Các liên kết tài nguyên mở trang tải gốc; cần tuân thủ điều khoản của Apple khi sử dụng tài nguyên.

Logic chuyển ngôn ngữ đã được kiểm tra tự động. Chưa kiểm tra trực quan trên trình duyệt.
