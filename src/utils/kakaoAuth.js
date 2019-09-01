import loadScriptOnce from 'load-script-once'

export default function (id, success, failure) {
  if (window.Kakao) {
    window.Kakao.Auth.createLoginButton({
      container: '#' + id,
      success: success,
      fail: failure
    })
  } else {
    loadScriptOnce('//developers.kakao.com/sdk/js/kakao.min.js')
      .then(() => {
        window.Kakao.init('1fbd6bb5f70208dbc01447307985588a')
        window.Kakao.Auth.createLoginButton({
          container: '#' + id,
          success: success,
          fail: failure
        })
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
