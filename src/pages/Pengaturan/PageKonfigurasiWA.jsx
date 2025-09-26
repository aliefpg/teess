import React, { useState, useEffect } from 'react';
import { getAllWAConfigs, updateWAConfig } from '../../utils/http';
import './PageKonfigurasiWA.css';

function PageKonfigurasiWA() {
    const [configs, setConfigs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllWAConfigs()
            .then(response => {
                setConfigs(response.data.data || []);
            })
            .catch(error => {
                console.error("Gagal mengambil data konfigurasi:", error);
                setConfigs([]);
            })
            .finally(() => setIsLoading(false));
    }, []);

    // Handler update state config ketika ada perubahan di UI
    const handleConfigChange = (type, field, value) => {
        setConfigs(prev =>
            prev.map(c =>
                c.notification_type === type ? { ...c, [field]: value } : c
            )
        );
    };

    // Simpan perubahan ke backend
    const handleSave = async (notificationType) => {
        const configToSave = configs.find(c => c.notification_type === notificationType);
        if (!configToSave) {
            alert('Konfigurasi tidak ditemukan.');
            return;
        }

        const body = {
            template_message: configToSave.template_message || null,
            is_active: configToSave.is_active,
            value: configToSave.value !== undefined ? configToSave.value : null,
        };

        try {
            await updateWAConfig(notificationType, body);
            alert('Konfigurasi berhasil disimpan!');
        } catch (error) {
            alert('Gagal menyimpan konfigurasi.');
            console.error(error);
        }
    };

    if (isLoading) {
        return <div className="page-content">Loading...</div>;
    }

    // Ambil config sekali saja
    const configTagihan = configs.find(c => c.notification_type === 'KIRIM_TAGIHAN');
    const configHistoryRange = configs.find(c => c.notification_type === 'KIRIM_TAGIHAN_HISTORY_RANGE');

    return (
        <div className="page-content">
            <h3>Konfigurasi Notifikasi WhatsApp</h3>

            {/* Bagian Template Pesan Tagihan */}
            {configTagihan ? (
                <div className="config-card">
                    <h4>{configTagihan.description}</h4>
                    <textarea
                        rows="10"
                        value={configTagihan.template_message || ''}
                        onChange={(e) =>
                            handleConfigChange(configTagihan.notification_type, 'template_message', e.target.value)
                        }
                    />
                    <div>
                        <strong>Variabel Tersedia: </strong>
                        <small>
                            {configTagihan.available_variables
                                ? JSON.parse(configTagihan.available_variables).join(', ')
                                : ''}
                        </small>
                    </div>
                    <label style={{ display: 'block', marginTop: '10px' }}>
                        <input
                            type="checkbox"
                            checked={configTagihan.is_active}
                            onChange={(e) =>
                                handleConfigChange(configTagihan.notification_type, 'is_active', e.target.checked)
                            }
                        />{' '}
                        Aktifkan Notifikasi
                    </label>
                    <button onClick={() => handleSave(configTagihan.notification_type)} style={{ marginTop: '10px' }}>
                        Simpan Perubahan
                    </button>
                </div>
            ) : (
                <p>Konfigurasi KIRIM_TAGIHAN tidak ditemukan.</p>
            )}

            {/* Bagian Jangkauan Riwayat Tagihan */}
            {configHistoryRange ? (
                <div className="config-card" style={{ marginTop: '30px' }}>
                    <h4>{configHistoryRange.description || 'Jangkauan Riwayat Tagihan (bulan)'}</h4>
                    <input
                        type="number"
                        min="1"
                        value={configHistoryRange.value || 12}
                        onChange={(e) =>
                            handleConfigChange(configHistoryRange.notification_type, 'value', Number(e.target.value))
                        }
                    />
                    <button onClick={() => handleSave(configHistoryRange.notification_type)} style={{ marginLeft: '10px' }}>
                        Simpan Perubahan
                    </button>
                </div>
            ) : (
                <p>Konfigurasi KIRIM_TAGIHAN_HISTORY_RANGE tidak ditemukan.</p>
            )}
        </div>
    );
}

export default PageKonfigurasiWA;
