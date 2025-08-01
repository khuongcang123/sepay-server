// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware để parse JSON từ SePay
app.use(bodyParser.json());

// Route nhận callback từ SePay
app.post('/hooks/sepay-payment', (req, res) => {
  const paymentData = req.body;

  console.log('Nhận dữ liệu từ SePay:', paymentData);

  // TODO: Xử lý logic thanh toán tại đây (lưu DB, gửi thông báo, cập nhật trạng thái...)

  res.status(200).send('OK');
});

// Trang test đơn giản
app.get('/', (req, res) => {
  res.send('SePay Webhook Server đang chạy!');
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
