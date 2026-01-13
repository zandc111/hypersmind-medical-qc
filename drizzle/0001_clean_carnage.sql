CREATE TABLE `trial_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hospital_name` varchar(255) NOT NULL,
	`contact_name` varchar(100) NOT NULL,
	`contact_phone` varchar(20) NOT NULL,
	`contact_email` varchar(320),
	`department` varchar(100),
	`position` varchar(100),
	`product_interest` enum('qc','generation','both') NOT NULL,
	`hospital_scale` enum('small','medium','large','extra_large'),
	`requirements` text,
	`status` enum('pending','contacted','demo_scheduled','converted','rejected') NOT NULL DEFAULT 'pending',
	`notes` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trial_applications_id` PRIMARY KEY(`id`)
);
