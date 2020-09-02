computed와 methods의 가장 큰 차이점은 computed는 인자를 넘길 수 없다.
하지만 인자가 필요없는 상황이라면 computed는 값이 변경되지 않으면 캐싱하기 때문에 성능이 더 좋다.
methods는 항상 함수 호출 뒤 값이 리턴된다.