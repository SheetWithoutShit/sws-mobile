import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/SignIn';
import COLORS from '../shared/colors';

const Stack = createStackNavigator();

const Routes = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name='name' 
            component={SignIn}
            options={{
                headerStyle: {
                    backgroundColor: COLORS.lightGreen,
                },
                headerTitleStyle: {
                    opacity: 0,
                },
            }}
        />
    </Stack.Navigator>
)

export default Routes;