import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from 'firebase/firestore';

import { db } from './firebaseConfig';

export default function App() {

 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CRUD Firebase</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="CPF"
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />

      {editandoId ? (
        <TouchableOpacity style={styles.botaoEditar} onPress={atualizar}>
          <Text style={styles.botaoTexto}>Atualizar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.botao} onPress={inserir}>
          <Text style={styles.botaoTexto}>Inserir</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>

            <View style={styles.botoesLinha}>
              <TouchableOpacity
                style={styles.btnPequenoEditar}
                onPress={() => editar(item)}
              >
                <Text style={styles.botaoTexto}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnPequenoExcluir}
                onPress={() => excluir(item.id)}
              >
                <Text style={styles.botaoTexto}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// ====== ESTILOS (mantive os seus)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  },
  botaoEditar: {
    backgroundColor: '#2196F3',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  botoesLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  btnPequenoEditar: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5
  },
  btnPequenoExcluir: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5
  }
});
