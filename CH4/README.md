# Vue Instance LifeCycle

### Creation: 컴포넌트 초기화 단계
-BeforeCreate: 가장 먼저 실행이 됨. 인스턴스의 data, event 객체는 접근할 수 없음.
-Create: data, event 객체가 준비 완료된 상태이므로 처리가 가능하다.

### Mounting: DOM 작성 단계
-BeforeMount: 템플릿 및 코드들이 렌더링 되기 직전에 호출됨. 거의 사용하지 않음.
-Mounted: 컴포넌트, 템플릿, DOM이 모두 준비된 상태. 이 상태에서 ajax 처리 가능.

### Updating: 상태 변화로 인한 렌더링 단계
-BeforeUpdate: 컴포넌트 상태 변화가 일어나면 다시 DOM이 렌더링 되는데 그 전에 호출.
-Updated: 상태 변화 후 렌더링이 완료되면 실행. 여기서 상태 값이 변경되면 무한루프에 빠짐.

### Destruction: 소멸 단계
-BeforeDestroy: 인스턴스 제거 직전에 호출.
-Destroyed: 인스턴스 제거 완료 후 호출. 연관된 이벤트 리스너, 디렉디브 등이 해제.

# 다음은 Vue Instance LifeCycle 과정이다.
1.new Vue()
2.이벤트 및 라이프 사이클 초기화

### beforeCreate
3.화면에 반응성 주입

### created
4.el, template 속성확인

### beforeMount
5.template 속성 내용을 render()로 변환
6.자바스크립트로 화면의 돔을 그리는 함수입니다.

### mounted
7.$el 생성 후 el 속성 값을 대입
8.인스턴스를 화면에 부착
9.인스턴스의 데이터 변경

### beforeUpdate
10.화면 재 렌더링 및 데이터 갱신

### updated
11.인스턴스 내용 갱신
12.인스턴스 접근 가능

### beforeDestroy
13.컴포넌트, 인스턴스, 디렉티브 등 모두 해제

### destroy
14.인스턴스 소멸