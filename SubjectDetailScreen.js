import React, { useLayoutEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { SUBJECTS } from './subjects';
import { COLORS, SPACE, RADIUS } from './theme';

const Field = ({ label, value }) => (
  <View style={styles.line}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const SubjectDetailScreen = ({ route, navigation }) => {
  const { subjectId } = route.params ?? {};
  const subject = SUBJECTS.find((s) => s.id === subjectId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: subject ? subject.code : 'Subject' });
  }, [navigation, subject]);

  if (!subject) {
    return (
      <SafeAreaView style={[styles.safe, styles.centre]}>
        <Text style={styles.missing}>Subject not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>{subject.title}</Text>
        <Field label="CODE" value={subject.code} />
        <Field label="UNITS" value={String(subject.units)} />
        <Field label="ROOM" value={subject.room} />
        <Field label="SCHEDULE" value={subject.schedule} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  centre: { justifyContent: 'center', alignItems: 'center' },
  missing: { color: COLORS.textMuted },
  card: { backgroundColor: COLORS.surface, borderRadius: RADIUS.md,
          margin: SPACE.md, padding: SPACE.lg },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.text,
           marginBottom: SPACE.md },
  line: { borderTopWidth: 1, borderTopColor: COLORS.border,
          paddingTop: SPACE.sm, marginTop: SPACE.sm },
  label: { fontSize: 11, fontWeight: '700', color: COLORS.textMuted },
  value: { fontSize: 15, color: COLORS.text, marginTop: 2 },
});

export default SubjectDetailScreen;