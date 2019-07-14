#include <stdio.h>
#include <unistd.h>
#include <gpiod.h>

int main()
{
	int meeting_number;
	struct gpiod_chip *output_chip;
	struct gpiod_line *output_line;
	int line_value = 0;

	meeting_number = 14;
	printf("Hello %d° CCPP Meeting\n", meeting_number);

	/* use libgpiod */
	output_chip = gpiod_chip_open_by_number(0);
	output_line = gpiod_chip_get_line(output_chip, 7);
	if (output_chip == NULL || output_line == NULL)
		goto error;

	/* config as output */
	gpiod_line_request_output(output_line, "15ccppTest",
		GPIOD_LINE_ACTIVE_STATE_HIGH);

	while (1) {
		line_value ^= 1;
		gpiod_line_set_value(output_line, line_value);
		sleep(1);
		printf("Setting pino GPIO01_7 to %d\n", line_value);
	}
	
	return 0;

error:
	printf("Error setting gpiod\n");
	return -190;
}
