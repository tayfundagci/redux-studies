// uygulamanın bütününün bir parçası, binanın parçası gibi, her bir tuğlayı uygulamadaki bir slice olarak düşünebilirsin.
// slice ın içerisinde state imizin içindeki tüm verilerin duracağı key'e field'a bir isim vericez
// initialstate vericez, dolu ya da boş olabilir.
// state verilerini güncelliycek olan reducerları tanımlıycaz
// reducerlar içerisinde bir takım fonksiyonlar olacak
// bu fonksiyonlar initialstate içerisindeki verileri güncelleyek. daha sonra orda yazdığımız fonksiyonları dışa aktarıcaz.
import { createSlice } from "@reduxjs/toolkit";

// counter sliceyi birazdan store'da reducerin içerisine yollayacağız.
// name; state miz için bir key oluyor. state.counter ile gidebiliriz.
// initialState ilk oluştururken ki vericeğimiz değerdir.
// reducers içerisine state imizi güncelliycek olan tanımları yazmamız gerekir.
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  // arttırma ve azaltma fonsksiyonlarını buraya yaz.
  // state = initialdaki değerin her zaman son halidir. initialState objesi state'in içinde olacaktır.
  // veriyi manipüle edeceğimiz fonskiyonları yaz. bunlara ACTIONS denir.
  // burda yazdıgımız actionları aşağıda dışa aktar ve counter.js e taşı
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
    // kullanıcıgının inputa ne girdiğini buraya taşımamız, görmemiz için action isminde bir parametre koymalıyız.
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, resetCounter, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
// reduceri dışa aktarıp store.js e git import et ve reducer içerisine koy.
