export default {
  locale: 'ko',
  dictionary: {
    ko: {
      attributes: {
        companyName: '회사명',
        famName: '팸이름',
        id: 'ID',
        password: '비밀번호',
        passwordConfirm: '비밀번호 확인',
        name: '이름',
        appetite: '입맛'
      },
      messages: {
        required: (field) => `${field}은/는 필수항목 입니다.`,
        max: (field, length) => `${field}은/는 ${length}자 이내로 입력해주세요.`,
        min: (field, length) => `${field}은/는 ${length}자 이상 입력해주세요.`,
        confirmed: (field, other) => `${field}은/는 ${other}와 일치하지 않습니다.`
      }
    }
  }
}
