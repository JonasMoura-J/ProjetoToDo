import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { Container } from './styles'

import ProgressCircle from 'react-native-progress-circle';

import api from '../../services/api';

import { useIsFocused } from '@react-navigation/native';
// import { useFocusEffect } from '@react-navigation/native';

const Dashboard = () => {

  const focoPagina = useIsFocused();

  const [percentual, setPercentual] = useState(0);

  const percentualTarefasRealizadas = async () => {
    const resultado = await api.get("tarefas");
    const tarefas = resultado.data
    const tarefas_realizadas = tarefas.filter(tarefa => tarefa.concluido)

    const calculo_percentual = (tarefas_realizadas.length / tarefas.length) * 100

    setPercentual(calculo_percentual)
  }

  // Implementação Marcela
  // if (focoPagina) {
  //   percentualTarefasRealizadas();
  // }

  // useFocusEffect(percentualTarefasRealizadas())

  useEffect(() => {
    if (focoPagina) {
      percentualTarefasRealizadas();
    }

  }, [focoPagina])

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