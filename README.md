# vuejs-calculator

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Notes
Các phép tính bình phương, khai căn, giai thừa, phần trăm thuộc component Operator, nghĩa là sẽ hiển thị kết quả luôn mà không cần ấn phím =.

Các phép tính cộng trừ nhân chia chỉ để hiển thị. Việc calculate sẽ dựa vào hàm eval. Vậy nên sẽ thuộc component Input giống như các số 0->9.
