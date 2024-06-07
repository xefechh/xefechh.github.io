import telebot
import webbrowser
from telebot import types

# Your bot's API token
API_TOKEN = '7110404021:AAFJWA5d1CiAWTjROzKnLMfBbbXleDU5U_U'
bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start'])
def main(message):
    bot.send_message(message.chat.id, f'Привет, {message.from_user.username}')
    print(message.from_user.first_name)


bot.polling(non_stop=True)