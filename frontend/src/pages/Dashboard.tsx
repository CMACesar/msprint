import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useAuthStore } from '../store/authStore';

export default function Dashboard() {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo, {usuario?.nome}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Clientes</Typography>
              <Typography variant="h3">0</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Equipamentos</Typography>
              <Typography variant="h3">0</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Ordens de Serviço</Typography>
              <Typography variant="h3">0</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
