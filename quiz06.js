// ## 6. 장바구니 뒤바뀜 문제

// &nbsp;

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

// ```javascript


function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};

const userBCart = userACart;

const coupon = { 
    discount: 5000 
};

applyCoupon(userBCart, coupon);
console.log(userACart);
console.log(userBCart);



// ```

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
        //a,b카트 둘 다 똑같이 5000원이 할인된 가격이 책정되어있을것이다.
// 2.	1번의 결과에 대한 이유를 설명해보세요.
        //단순 대입 연산자를 활용하여 객체를 생성하였으므로 두 객체가 참조하는 값의 주소가 같기 때무이다.
// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
        //깊은 복사라는 방법을 사용하여 객체를 별도의 메모리에 저장하여 새로운 객체 userBCart를 생성하면 문제가 해결될것
        //or 그냥 b카트 객체를 따로 생성하면됨
