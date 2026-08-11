export const questions: [string, string][] = [
  [
    "JavaScript là gì?",
    "JavaScript là ngôn ngữ lập trình thông dịch, có thể chạy trên trình duyệt (client-side) và phía server thông qua Node.js."
  ],
  [
    "Khác biệt giữa null và undefined là gì?",
    "undefined thường biểu thị giá trị chưa được gán hoặc không tồn tại; null là giá trị được gán một cách chủ ý để biểu thị sự trống rỗng hoặc không có giá trị."
  ],
  [
    "Khác biệt giữa var, let và const là gì?",
    "var có function scope và được hoisting; let và const có block scope. const không cho phép gán lại biến sang một giá trị mới."
  ],
  [
    "Phân biệt == và ===?",
    "== so sánh sau khi có thể thực hiện ép kiểu (type coercion), còn === so sánh nghiêm ngặt cả giá trị và kiểu dữ liệu."
  ],
  [
    "Truthy và Falsy values là gì?",
    "Falsy là các giá trị khi chuyển sang Boolean cho kết quả false, gồm false, 0, -0, 0n, '', null, undefined và NaN. Các giá trị còn lại thường là Truthy."
  ],
  [
    "Hoisting là gì?",
    "Hoisting là cơ chế JavaScript xử lý các khai báo trước khi thực thi code. var được khởi tạo với undefined; let và const được hoisted nhưng nằm trong Temporal Dead Zone cho đến khi được khai báo."
  ],
  [
    "Scope (phạm vi) trong JavaScript là gì?",
    "Scope xác định nơi một biến có thể được truy cập. Các loại phổ biến gồm Global Scope, Function Scope và Block Scope."
  ],
  [
    "Arrow Function khác gì Function thường?",
    "Arrow Function có cú pháp ngắn gọn, không có this riêng mà sử dụng this từ scope bên ngoài, không có arguments riêng và không thể được sử dụng làm constructor với new."
  ],
  [
    "NaN là gì?",
    "NaN là viết tắt của Not-a-Number, đại diện cho một giá trị số không hợp lệ. Đặc biệt, typeof NaN trả về 'number'."
  ],
  [
    "Các kiểu dữ liệu nguyên thủy (Primitive types) trong JavaScript gồm những gì?",
    "Có 7 kiểu primitive: string, number, bigint, boolean, undefined, symbol và null."
  ],
  [
    "Closure là gì?",
    "Closure là cơ chế trong đó một function có thể ghi nhớ và truy cập các biến thuộc scope bên ngoài ngay cả khi function bên ngoài đã thực thi xong."
  ],
  [
    "Từ khóa this hoạt động thế nào trong JavaScript?",
    "Giá trị của this phụ thuộc chủ yếu vào cách function được gọi. Với method, this thường là object gọi method; với constructor là instance mới; với call/apply/bind có thể được chỉ định rõ; Arrow Function sử dụng this từ scope bên ngoài."
  ],
  [
    "Event Loop là gì?",
    "Event Loop là cơ chế giúp JavaScript xử lý các tác vụ bất đồng bộ bằng cách phối hợp Call Stack với Task Queue và Microtask Queue để thực thi code mà không chặn luồng chính."
  ],
  [
    "Callback function là gì?",
    "Callback là một function được truyền vào function khác dưới dạng argument để được gọi lại sau đó, thường dùng trong xử lý bất đồng bộ hoặc xử lý sự kiện."
  ],
  [
    "Promise là gì?",
    "Promise là object đại diện cho kết quả của một thao tác bất đồng bộ. Promise có ba trạng thái chính: Pending, Fulfilled và Rejected."
  ],
  [
    "Async/Await khác gì Promise?",
    "Async/Await là cú pháp giúp làm việc với Promise dễ đọc hơn. async khiến function luôn trả về Promise, còn await dùng để chờ Promise hoàn thành."
  ],
  [
    "Prototype và Prototype Chain là gì?",
    "Prototype là object mà một object khác có thể kế thừa property và method. Prototype Chain là chuỗi các prototype mà JavaScript tìm kiếm khi property không tồn tại trực tiếp trên object."
  ],
  [
    "Currying trong JavaScript là gì?",
    "Currying là kỹ thuật chuyển một function nhận nhiều argument thành chuỗi các function, mỗi function nhận một argument, ví dụ f(a, b, c) thành f(a)(b)(c)."
  ],
  [
    "Memory Leak xảy ra khi nào?",
    "Memory Leak xảy ra khi chương trình vẫn giữ reference đến những object không còn cần thiết, khiến Garbage Collector không thể giải phóng bộ nhớ."
  ],
  [
    "Event Bubbling và Event Capturing là gì?",
    "Đây là hai giai đoạn lan truyền event trong DOM. Capturing đi từ phần tử cha xuống phần tử con; Bubbling đi từ phần tử con lên phần tử cha."
  ]
];