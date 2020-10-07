import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';


import { Container, Button, ButtonText} from './styles'


import ProgressCircle from 'react-native-progress-circle'


import api from '../../services/api';


const Dashboard = () => {


  const [tasks, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [cont, setCont] = useState(0);
  const [cont2, setCont2] = useState(0);
 
  const loadTasks = async () => {
      const response = await api.get("tarefas");
      // console.warn(response.data);
      setTasks(response.data)


  }


  useEffect(() => {
    loadTasks();
    setCont(tasks.length)
    setCont2(tasks.filter((t) => t.concluido).length)
  }, [tasks])


  return (
    <Container>
      <ProgressCircle
        percent={(cont2/cont)*100}
        radius={100}
        borderWidth={30}
        color="tomato"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 25 }}>{`${((cont2/cont)*100).toFixed(0)}%`}</Text>
      </ProgressCircle>
    </Container>



  )
};


export default Dashboard;