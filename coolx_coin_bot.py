import telebot
from telebot import types

# Your bot's API token
API_TOKEN = '7110404021:AAFJWA5d1CiAWTjROzKnLMfBbbXleDU5U_U'
bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start'])
def main(message):
    if message.from_user.language_code == 'ru':
        bot.send_message(message.chat.id, f'Привет, {message.from_user.username}')
        print(message.from_user.username, message.from_user.language_code)
    else:
        bot.send_message(message.chat.id, f'Hello, {message.from_user.username}')
        print(message.from_user.username, message.from_user.language_code)

bot.polling(non_stop=True)