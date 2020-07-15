import axios from "axios";

export default {
  // Gets quizes
  symptomChecker: function() {
    const appId = "f3ec44a2"
    const APIKey = "ea2e478aeea48ed264c553324544937e"
    return axios.get(`https://api.infermedica.com/covid19 ${appId} ${APIKey}`)
}
}