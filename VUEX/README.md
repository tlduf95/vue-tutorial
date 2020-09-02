#vuex의 cycle
1.Vue Components에서 Dispatch를 통해 원하는 Actions을 호출한다.
2.Vuex의 Actions은 서버 API를 비동기로 처리한다.
3.처리가 끝나면 Actions은 commit 명령을 통해 Mutations을 호출한다.
4.Mutation은 Vuex의 저장소에 접근하기 위해 사용하고, 동기적인 처리를 담당.
5.State는 Vuex의 저장소이다. Mutation에 의해 데이터가 저장되면, Vue component에서 state 값을 읽을 수 있다.