import api from './api';
import { handleError } from './error-handler';

export interface ITechnicalConfig {
  base_categoria_adicional_id: number;
  categoria_id: number;
  channel_wifi_24: number;
  channel_wifi_58: number;
  configurado: number;
  contrato_ativo: number;
  contrato_id: number;
  estado_financeiro: string;
  id: number;
  local: string;
  modelo_58: boolean;
  modelo_onu2: string;
  modo_wifi: string;
  nome_plano_principal: string;
  onu_id: number;
  principal: boolean;
  revan_endereco_id: number;
  upnp: number;
  visible_wifi_24: number;
  visible_wifi_58: number;
}

export interface IONUChannels {
  data: number[];
  status: string;
  total: number;
}

export interface IPasswordChange {
  wifi_senha: string;
}

export interface IPasswordShare {
  imagem: string;
  status: string;
}

export const getTechnicalConfig = async (
  id: number
): Promise<ITechnicalConfig[] | undefined> => {
  try {
    const response = await api.get(`/me/instalacao/${id}`);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const changePassword = async (
  installation_id: number,
  type: 24 | 58
): Promise<IPasswordChange | undefined> => {
  try {
    const response = await api.put(
      `/me/instalacao/${installation_id}/wifi_senha_${type}`
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const sharePassword = async (
  installation_id: number,
  type: 24 | 58
): Promise<IPasswordShare | undefined> => {
  try {
    const response = await api.get(
      `/me/instalacao/${installation_id}/wifi_senha_${type}`
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};
