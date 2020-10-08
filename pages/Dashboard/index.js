import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { Container } from './styles'

import ProgressCircle from 'react-native-progress-circle'

import api from '../../services/api';

import { useIsFocused } from '@react-navigation/native';

const Dashboard = () => {


  const [tasks, setTasks] = useState([]);
  const [percentual, setPercentual] = useState(0);
  const isFocused = useIsFocused();


  const loadTasks = async () => {

    try {
      const response = await api.get("tarefas");
      // console.warn(response.data);
      const tks = response.data;
      setTasks(tks)

      setPercentual(((tks.filter((t) => t.concluido).length / tks.length) * 100))

    } catch (err) {
      console.warn("Falha ao recuperar as tarefas.")
    }

  }



  useEffect(() => {
    loadTasks();
    // console.warn(tasks.length)
  }, [isFocused])

  return (
    <Container>
      <ProgressCircle
        percent={percentual}
        radius={100}
        borderWidth={30}
        color="tomato"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 25 }}>{`${percentual.toFixed(2)}%`}</Text>
      </ProgressCircle>
    </Container>


  )
};

export default Dashboard;