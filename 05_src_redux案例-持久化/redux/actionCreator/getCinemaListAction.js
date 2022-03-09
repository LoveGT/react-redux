import axios from "axios";

// redux-thunk风格
// function getCinemaListAction() {
//   return (dispatch) => {
//     axios({
//       url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3596560",
//       method: "GET",
//       headers: {
//         "X-Client-Info":
//           '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464956046582849129938945"}',
//         "X-Host": "mall.film-ticket.cinema.list",
//       },
//     }).then((res) => {
//       dispatch({
//         type: "change-cinemaList",
//         payload: res.data.data.cinemas,
//       });
//     });
//   };
// }

// redux-promise风格
function getCinemaListAction() {
  return axios({
    url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3596560",
    method: "GET",
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464956046582849129938945"}',
      "X-Host": "mall.film-ticket.cinema.list",
    },
  }).then((res) => {
    return {
      type: "change-cinemaList",
      payload: res.data.data.cinemas,
    };
  });
}
export { getCinemaListAction };
