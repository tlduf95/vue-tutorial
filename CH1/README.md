# 선언적 렌더링
vue는 템플릿 구문을 이용하여 DOM에서 데이터를 선언적으로 렌더링 할 수 있다.
Vue는 데이터와 DOM은 연결하여 반응형으로 만든다.
첫번째 예제에서 app.message를 다른 값으로 설정시 html의 DOM이 반응형으로 렌더링된다.
Vue앱은 단일 요소에 연결되어 DOM 요소를 제어한다. (ex el: '#app')
el 및 data는 Vue 인스턴스의 option 객체이다.

### v-bind
v- 가 붙은 명령어는 지시어, 디렉티브(derective)라고 한다.
v-bind는 엘리먼트의 속성을 최신 상태로 유지한다.

### v-if
조건문과 같다.
엘리먼트의 표시 여부를 쉽게 제어 가능.
Vue는 텍스트나 속성만 아니라 DOM의 구조에도 데이터를 바인딩 할 수 있다.

### v-for
반복문과 같다.
app4.todos.push({text: 'new vue'}) 와 같이 DOM에 데이터를 동적으로 추가할 수 있다.

### v-on
v-on 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트리스너 추가 가능.
앱의 상태만을 업데이트하고 모든 DOM 조작은 Vue를 통해서 처리된다.
함수(행동)은 vue 인스턴스의 methods 옵션에서 정의한다.

### v-model
v-model은 양방향 바인딩 디렉티브이다.
입력과 앱 상태를 양방향으로 바인딩한다.(input에서 v-model로 p태그에서 선언적 렌더링한 message를 양방향 바인딩한다.)
예제에서 input에 사용자가 입력하면 input과 p태그 모두 DOM의 상태가 변화한다.

