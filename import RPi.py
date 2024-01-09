import RPi.GPIO as GPIO
import time

pin_servo = 5 #n.5 gpio

GPIO.setmode(GPIO.BCM)
GPIO.setup(pin_servo, GPIO.OUT)
pwm_servo = GPIO.PWM(pin_servo, 50) #50Hz
pwm_servo.start(0)


def destroy():
    pwm_servo.stop()
    GPIO.cleanup()




def setDirection(angle):
    # 0  (STOP)
    # 2  (0°)
    # 7  (90°)
    # 12 (180°)
    duty = 2 + (angle / 18)
    pwm_servo.ChangeDutyCycle(duty)
    #抖動
    time.sleep(0.3)
    pwm_servo.ChangeDutyCycle(0)
    print("angle=", angle, "-> duty=", duty)


def run():
    for angle in range(0, 181, 20):
        setDirection(angle)
        time.sleep(1)


if __name__ == "__main__":
    try:
        run()
    finally:
        destroy()