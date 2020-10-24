import api from './api';
import { handleError } from './error-handler';

export interface IInstallation {
  base_categoria_adicional_id: number;
  categoria_id: number;
  channel_wifi_24: number;
  channel_wifi_58: number;
  configurado: number;
  contrato_ativo: number;
  estado_financeiro: string;
  id: number;
  local: string;
  modelo_58: boolean;
  modo_wifi: string;
  nome_plano_principal: string;
  onu_id: number;
  upnp: number;
  visible_wifi_24: number;
  visible_wifi_58: number;
}

export interface IAddress {
  bairro: string;
  cidade: string;
  cidade_id: number;
  id: number;
  instalacoes: Array<IInstallation>;
  logradouro: string;
  numero: string;
  uf: string;
}

interface ICustomerAddresses {
  enderecos: IAddress[];
}

export const getAddresses = async (): Promise<ICustomerAddresses | undefined> => {
  try {
    const response = await api.get('/me/enderecos');
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getServices = async (service_id: number): Promise<any> => {
  try {
    const response = await api.get(`me/instalacao/${service_id}`);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};
