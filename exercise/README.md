# 연습 1


* 페이지 전환과 값 전달



## 문제: 여행 일정 선택 웹앱 만들기

### 💡 목표
사용자가 여행 날짜를 입력하고, 선택한 날짜를 다음 페이지에서 확인하고 저장하는 기능을 구현하는 것이 목표야!

#### HomePage

- "여행 일정을 시작해볼까요?"라는 문구와 날짜를 입력할 수 있는 `<input type="date">`가 있어.

- "다음으로" 버튼을 누르면 SchedulePage로 이동하고, 입력한 날짜를 전달해야 해.

#### SchedulePage

- 전달받은 날짜를 보여주고,

- "일정 저장하기" 버튼을 누르면 저장됐다는 메시지를 띄우고 다시 HomePage로 이동해.



## 프로젝트 후기

- 페이지 전환

 `Router`와 `useNavigate`를 통해 페이지 전환의 기본적인 구성을 익혔다.
 
 `useNavigate`를 사용할 때에 `navigate('/schedule' , {state: {date: selectedDate}})` 이와 같이 두번째 인자에 state를 할당하여 주소 이동과 동시에 `date`라는 index를 통해 값을 꺼내 쓸 수 있다.

 사용할 때에는 `const selectedDate = useLocation().state?.date` 이와 같이 `useLocataion()`의 `state`멤버를 통해 접근 한다.
 

- 리액트 훅

 `useNavigate()`와 같은 훅을 사용할때에는 `const navigate = useNavigate()` 이와 같이 등록하고 사용하여야 한다.