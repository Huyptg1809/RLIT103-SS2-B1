/*
| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
| 1. Chuyến xe 4 km, mưa lớn | distanceInKm = 4, isHeavyRain = true | 36.000 VNĐ | 32.400 VNĐ |
| 2. Chuyến xe 2 km, không mưa | distanceInKm = 2, isHeavyRain = false | 12.000 VNĐ | 12.000 VNĐ |

# PHÂN TÍCH LỖI
Lỗi nằm ở công thức: totalFare = baseFare + distanceInKm * extraFarePerKm;
Khi quãng đường lớn hơn 2 km, chương trình tính phụ phí cho cả quãng đường.
Công thức đúng: totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
*/

const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;
const baseFare = 12000;
const extraFarePerKm = 4500;
let totalFare = 0;

if (distanceInKm < 0) {
  totalFare = 0;
} else {
  if (distanceInKm <= 2) {
    totalFare = baseFare;
  } else {
    totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
  }

  if (isHeavyRain) {
    totalFare = totalFare * 1.2;
  }
}

console.log("Ma chuyen di:", bookingId);
console.log("Khach hang:", customerName);
console.log("Quang duong:", distanceInKm, "km");
console.log("Tong cuoc chuyen di:", totalFare, "VNĐ");