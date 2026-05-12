ALTER TABLE `roles` DROP INDEX `roles_name_unique`;--> statement-breakpoint
ALTER TABLE `roles` ADD `label` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `roles` ADD CONSTRAINT `roles_label_unique` UNIQUE(`label`);--> statement-breakpoint
ALTER TABLE `roles` DROP COLUMN `name`;