// Hàm định dạng giá tiền
export const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };