import * as migration_20251124_055752_add_whatsapp from './20251124_055752_add_whatsapp';

export const migrations = [
  {
    up: migration_20251124_055752_add_whatsapp.up,
    down: migration_20251124_055752_add_whatsapp.down,
    name: '20251124_055752_add_whatsapp'
  },
];
