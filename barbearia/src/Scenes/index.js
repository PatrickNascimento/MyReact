import {createStackNavigator} from 'react-navigation'

import telaLogin from './Telas/index'
import cadastroUsuario from './Telas/cadastroUsuario'
import menuPrincipal from './Telas/menuPrincipal'

const Cenas = createStackNavigator ({
    telqaLogin:{screen:telaLogin},
    cadastroUsuario:{screen:cadastroUsuario},
    menuPrincipal:{screen:menuPrincipal}
})

export default Cenas;