import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [salary, setSalary] = useState(null);

  const calculateSalary = () => {
    let totalHours = parseFloat(hoursWorked);
    let rate = parseFloat(hourlyRate);

    let overtimeHours = 0;
    if (totalHours > 40) {
      overtimeHours = totalHours - 40;
      totalHours = 40;
    }

    let regularPay = totalHours * rate;
    let overtimePay = overtimeHours * rate * 1.5;

    let totalSalary = regularPay + overtimePay;
    setSalary(totalSalary);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Masukkan Jam Kerja:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10 }}
        onChangeText={setHoursWorked}
        value={hoursWorked}
        keyboardType="numeric"
      />

      <Text>Masukkan Tarif Per Jam:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10 }}
        onChangeText={setHourlyRate}
        value={hourlyRate}
        keyboardType="numeric"
      />

      <Button title="Hitung Gaji" onPress={calculateSalary} />

      {salary !== null && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          Gaji Karyawan: {salary.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

export default App;